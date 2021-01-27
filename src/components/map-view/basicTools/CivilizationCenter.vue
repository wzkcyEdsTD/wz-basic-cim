<template>
  <div class="ThreeDContainer civilization-center" :style="{ width: '400px' }">
    <el-divider content-position="left">楼梯分层</el-divider>
    <div class="civilization-frame">
      <div>分离高度：{{ svalue }}</div>
      <div class="slider-wrapper" @click.stop>
        <el-slider
          @change="change_S_Value"
          :min="smin"
          :max="smax"
          v-model="svalue"
        ></el-slider>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
const _UNDERGROUND_HASH_ = {
  RQLINE: "燃气管线",
  WSLINE: "污水管线",
  JSLINE: "给水管线",
  YSLINE: "雨水管线",
};
import { BimSourceURL } from "config/server/mapConfig";
import { mapActions } from "vuex";
export default {
  name: "CivilizationCenter",
  data() {
    return {
      //  分层数据
      IDS: {},
      smin: 0,
      smax: 100,
      svalue: 1,
    };
  },
  async mounted() {
    this.initScene();
  },
  beforeDestroy() {
    this.doCivilizationCenterVisible(false);
  },
  methods: {
    ...mapActions("map", []),
    initScene() {
      this.doUndergroundInit();
    },
    doUndergroundInit() {
      const {
        CIVILIZATION_CENTER_UNDERGROUND,
        CIVILIZATION_CENTER_UNDERGROUND_DATA,
      } = BimSourceURL;
      Object.keys(_UNDERGROUND_HASH_).map((key) => {
        const _KEY_ = `civilization_center_underground_${key}`;
        const promise = window.earth.scene.addS3MTilesLayerByScp(
          `${CIVILIZATION_CENTER_UNDERGROUND}/datas/${key}/config`,
          { name: _KEY_ }
        );
        Cesium.when(promise, async () => {
          const layer = window.earth.scene.layers.find(_KEY_);
          layer.setQueryParameter({
            url: CIVILIZATION_CENTER_UNDERGROUND_DATA,
            dataSourceName: "Pipes_table",
            dataSetName: _UNDERGROUND_HASH_[key],
            isMerge: true,
          });
        });
      });
      window.earth.scene.globe.globeAlpha = 0;
    },
    doCivilizationCenterVisible(boolean) {
      Object.keys(_UNDERGROUND_HASH_).map((key) => {
        window.extraHash[`civilization_center_underground_${key}`].show = boolean;
      });
    },
    change_S_Value(val) {},
  },
};
</script>

<style lang="less" scoped>
.civilization-center {
  padding: 10px;
  background: rgba(11, 20, 35, 0.8);
  border: 1px solid rgba(81, 161, 201, 0.6);
  .el-divider--horizontal {
    margin: 8px 0;
    background-color: #ccc;
    > .el-divider__text {
      color: #ccc;
      padding: 0 10px;
      background: rgba(11, 20, 35, 1);
    }
  }
  > .civilization-frame {
    width: 100%;
    display: flex;

    > div {
      display: inline-block;
      vertical-align: middle;
      padding: 0 4px;
      color: #fff;
      line-height: 38px;
      &:first-child {
        width: 120px;
      }
      &:last-child {
        flex: 1;
      }
    }
  }
}
</style>
