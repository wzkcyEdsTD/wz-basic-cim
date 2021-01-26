<template>
  <div class="ThreeDContainer kg-box-analyse" :style="{ width: '300px' }">
    <div>盒子高度：{{ sliderValue }}</div>
    <div class="slider-wrapper" @click.stop>
      <el-slider
        @change="changeValue"
        :min="min"
        :max="max"
        :step="step"
        v-model="sliderValue"
        :disabled="!dataDone"
      ></el-slider>
    </div>
    <KgLegend />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import KgLegend from "./components/KgLegend";
export default {
  name: "KgBoxAnalyse",
  data() {
    return {
      min: 0,
      max: 100,
      step: 1,
      sliderValue: 1,
      dataDone: false,
    };
  },
  components: { KgLegend },
  async mounted() {
    this.initBimScene();
  },
  beforeDestroy() {
    this.entityVisible(false);
  },
  methods: {
    ...mapActions("map", []),
    //  初始化BIM场景
    initBimScene() {
      if (window.extraHash.kgKml) {
        this.entityVisible(true);
        this.dataDone = true;
      } else {
        window.earth.dataSources
          .add(
            Cesium.KmlDataSource.load("/static/kml/polygon.kml", {
              camera: window.earth.scene.camera,
              canvas: window.earth.scene.canvas,
              clampToGround: true,
            })
          )
          .then((data) => {
            window.extraHash.kgKml = data;
            window.earth.zoomTo(data);
            this.dataDone = true;
            //  初始高度1
            this.changeValue(1);
          });
      }
    },
    //  slider init
    changeValue(val) {
      window.extraHash.kgKml.entities.values.map((v) => {
        v.polygon["extrudedHeight"] = parseFloat(val);
      });
    },
    entityVisible(boolean) {
      this.changeValue(1);
      window.extraHash.kgKml.entities.values.map((v) => {
        v.show = boolean;
      });
    },
    //  消除场景
    closeStationTour() {},
    //  清除BIM模块
    clearStationTour() {},
  },
};
</script>

<style lang="less" scoped>
.kg-box-analyse {
  overflow: hidden;
  padding: 0 10px;
  display: flex;
  background: rgba(11, 20, 35, 0.8);
  border: 1px solid rgba(81, 161, 201, 0.6);
  > div {
    display: inline-block;
    vertical-align: middle;
    padding: 0 4px;
    color: #fff;
    line-height: 38px;
    &:first-child {
      width: 120px;
    }
    &:nth-child(2) {
      flex: 1;
    }
  }
}
</style>
