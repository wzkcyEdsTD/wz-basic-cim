<template>
  <div class="ThreeDContainer civilization-center" :style="{ width: '400px' }">
    <el-divider content-position="left" v-if="false">楼梯分层</el-divider>
    <div class="civilization-frame" v-if="false">
      <div>分离高度：{{ hValue }}</div>
      <div class="slider-wrapper" @click.stop>
        <el-slider
          @change="change_Height_Value"
          :min="hMin"
          :max="hMax"
          v-model="hValue"
        ></el-slider>
      </div>
    </div>
    <el-divider content-position="left">地表透明度</el-divider>
    <div class="civilization-frame">
      <div>透明度：{{ aValue }}%</div>
      <div class="slider-wrapper" @click.stop>
        <el-slider
          @change="change_Alpha_Value"
          :min="aMin"
          :max="aMax"
          v-model="aValue"
        ></el-slider>
      </div>
    </div>
    <el-divider content-position="left">倾斜开挖</el-divider>
    <div class="civilization-frame">
      <el-button class="elformbtn" @click="doExcavate">倾斜开挖</el-button>
      <el-button class="elformbtn" @click="clearExcavate">清除</el-button>
    </div>
    <el-divider content-position="left">停车场</el-divider>
    <div class="civilization-frame">
      <el-button class="elformbtn" @click="doFpf">智慧停车系统</el-button>
    </div>
  </div>
</template>
<script>
const _UNDERGROUND_HASH_ = {
  RQLINE: "燃气管线",
  WSLINE: "污水管线",
  JSLINE: "给水管线",
  YSLINE: "雨水管线",
};
const _ABOVEGROUND_HASH_ = {
  // B2机电: "燃气管线",
  // B1机电: "B1机电_table",
  B2土建: "给水管线",
  B1土建: "B1土建_table",
  Roof: "Roof_table",
  Block: "citizens_table",
};
let handlerPolygon = undefined;
import { CIVILIZATION_CENTER_URL } from "config/server/mapConfig";
import { mapActions } from "vuex";
export default {
  name: "CivilizationCenter",
  data() {
    return {
      //  分层数据
      hMin: 0,
      hMax: 100,
      hValue: 0,
      //  透明度
      aMin: 0,
      aMax: 100,
      aValue: 0,
    };
  },
  async mounted() {
    this.initScene();
    this.initExcavate();
    this.cameraMove();
  },
  beforeDestroy() {
    //  透明度
    this.change_Alpha_Value(0);
    //  句柄销毁
    handlerPolygon.clear();
    handlerPolygon = undefined;
    //  图层开关
    this.doCivilizationCenterVisible(_UNDERGROUND_HASH_, false);
    this.doCivilizationCenterVisible(_ABOVEGROUND_HASH_, false);
  },
  methods: {
    ...mapActions("map", []),
    /**
     * 场景初始化
     */
    initScene() {
      if (window.extraHash.civilization) {
        this.doCivilizationCenterVisible(_UNDERGROUND_HASH_, true);
        this.doCivilizationCenterVisible(_ABOVEGROUND_HASH_, true);
      } else {
        const {
          ABOVEGROUND,
          UNDERGROUND,
          UNDERGROUND_DATA,
          ABOVEGROUND_DATA,
        } = CIVILIZATION_CENTER_URL;
        this.doGroundInit(_UNDERGROUND_HASH_, UNDERGROUND, UNDERGROUND_DATA);
        this.doGroundInit(_ABOVEGROUND_HASH_, ABOVEGROUND, ABOVEGROUND_DATA);
      }
    },
    /**
     * 开挖初始化
     */
    initExcavate() {
      handlerPolygon = new Cesium.DrawHandler(window.earth, Cesium.DrawMode.Polygon);
      handlerPolygon.activeEvt.addEventListener((isActive) => {
        if (isActive) {
          window.earth.enableCursorStyle = false;
          window.earth._element.style.cursor = "";
          $("body").removeClass("drawCur").addClass("drawCur");
        } else {
          window.earth.enableCursorStyle = true;
          $("body").removeClass("drawCur");
        }
      });
      handlerPolygon.movingEvt.addEventListener((windowPosition) => {
        if (windowPosition.x < 2000 && windowPosition.y < 2000) {
          return;
        }
      });
      handlerPolygon.drawEvt.addEventListener((result) => {
        if (!result.object.positions) {
          handlerPolygon.polygon.show = false;
          handlerPolygon.polyline.show = false;
          handlerPolygon.deactivate();
          handlerPolygon.activate();
          return;
        }
        let array = [].concat(result.object.positions);
        let positions = [];
        for (let i = 0, len = array.length; i < len; i++) {
          let cartographic = Cesium.Cartographic.fromCartesian(array[i]);
          let longitude = Cesium.Math.toDegrees(cartographic.longitude);
          let latitude = Cesium.Math.toDegrees(cartographic.latitude);
          if (positions.indexOf(longitude) == -1 && positions.indexOf(latitude) == -1) {
            positions.push(longitude, latitude, cartographic.height);
          }
        }
        window.earth.scene.globe.removeAllExcavationRegion();
        window.earth.scene.globe.addExcavationRegion({
          name: "excavate",
          position: positions,
          height: 100,
          transparent: false,
        });
        handlerPolygon.polygon.show = false;
        handlerPolygon.polyline.show = false;
        handlerPolygon.deactivate();
        handlerPolygon.activate();
      });
    },
    /**
     * 图层控制
     * @param {object} _HASH_ hash
     * @param {object} _SCENE_URL_ 模型服务地址
     * @param {object} _DATA_ 数据服务地址
     */
    doGroundInit(_HASH_, _SCENE_URL_, _DATA_) {
      Object.keys(_HASH_).map((key) => {
        const _KEY_ = `civilization_center_${key}`;
        const promise = window.earth.scene.addS3MTilesLayerByScp(
          `${_SCENE_URL_}/datas/${key}/config`,
          { name: _KEY_ }
        );
        if (_DATA_) {
          Cesium.when(promise, async () => {
            const { url, dataSourceName } = _DATA_;
            const layer = window.earth.scene.layers.find(_KEY_);
            layer.setQueryParameter({
              url,
              isMerge: true,
              ...(dataSourceName
                ? {
                    dataSourceName,
                    dataSetName: _HASH_[key],
                  }
                : {
                    dataSourceName: _HASH_[key],
                  }),
            });
          });
        }
        //  做全局标识，不保存图层指针了
        window.extraHash.civilization = true;
      });
    },
    /**
     * 显隐控制
     * @param {object} _HASH_ hash
     * @param {boolean} boolean 开关
     */
    doCivilizationCenterVisible(_HASH_, boolean) {
      Object.keys(_HASH_).map((key) => {
        const _KEY_ = `civilization_center_${key}`;
        const layer = window.earth.scene.layers.find(_KEY_);
        layer.visible = boolean;
      });
    },
    change_Height_Value(val) {},
    change_Alpha_Value(val) {
      window.earth.scene.globe.globeAlpha = (100 - val) / 100;
    },
    doExcavate() {
      handlerPolygon.activate();
    },
    clearExcavate() {
      window.earth.scene.globe.removeAllExcavationRegion();
      handlerPolygon.polygon.show = false;
      handlerPolygon.polyline.show = false;
    },
    /**
     * 漫游
     * @param {number} val 地下室B_
     */
    doFpf() {
      window.open("http://125.124.19.162:8888");
    },
    cameraMove() {
      window.earth.camera.flyTo({
        destination: {
          x: -2876906.002533756,
          y: 4841075.198844643,
          z: 2995213.4453336787,
        },
        orientation: {
          heading: 0.003336768850279448,
          pitch: -0.5808830390057418,
          roll: 0.0,
        },
        maximumHeight: 450,
      });
    },
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
