<template>
  <div class="ThreeDContainer kg-box-analyse" :style="{ width: '200px' }">
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
  </div>
</template>
<script>
import { mapActions } from "vuex";
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
