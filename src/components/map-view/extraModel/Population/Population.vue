<!--
 * @Author: eds
 * @Date: 2020-08-21 18:30:30
 * @LastEditTime: 2020-09-03 14:07:34
 * @LastEditors: eds
 * @Description:
 * @FilePath: \wz-city-culture-tour\src\components\medical-view\extraModel\Population\Population.vue
-->
<template>
  <div class="population"></div>
</template>

<script>
import { getPopulation } from "api/cityBrainAPI";
const Cesium = window.Cesium;

export default {
  data() {
    return {
      populationCircleList: {},
      populationCircleLabelList: {},
      medicalCircleCollection: undefined,
    };
  },
  mounted() {
    this.eventRegsiter();
    this.createEntityCollection();
  },
  methods: {
    eventRegsiter() {
      const that = this;
      this.$bus.$off("cesium-3d-population-circle");
      this.$bus.$on(
        "cesium-3d-population-circle",
        ({ doDraw, id, geometry }) => {
          !doDraw
            ? that.removePopulationCircle(id)
            : id && geometry
            ? that.drawPopulationCircle(id, geometry)
            : undefined;
        }
      );
    },
    /**
     * 创建datesource
     */
    createEntityCollection() {
      const MedicalCircleEntityCollection = new Cesium.CustomDataSource(
        "medical"
      );
      const MedicalCircleLabelEntityCollection = new Cesium.CustomDataSource(
        "medical_label"
      );
      window.earth.dataSources
        .add(MedicalCircleEntityCollection)
        .then((datasource) => {
          this.medicalCircleCollection = MedicalCircleEntityCollection;
        });
      window.earth.dataSources
        .add(MedicalCircleLabelEntityCollection)
        .then((datasource) => {
          this.medicalCircleLabelCollection = MedicalCircleLabelEntityCollection;
        });
      //window.earth.scene.globe.depthTestAgainstTerrain = false;
    },
    /**
     * 开启扫描
     */
    async drawPopulationScan(
      doScan,
      id,
      { lng, lat } = {},
      radius = 500,
      period = 2.0
    ) {
      if (!doScan) return (window.earth.scene.scanEffect.show = false);
      window.earth.scene.scanEffect.show = true;
      window.earth.scene.scanEffect.mode = Cesium.ScanEffectMode.CIRCLE;
      window.earth.scene.scanEffect.centerPostion = new Cesium.Cartesian3.fromDegrees(
        lng,
        lat,
        30
      );
      window.earth.scene.scanEffect.speed = radius / period;
      window.earth.scene.scanEffect.period = 2.0;
      window.earth.scene.scanEffect.color = Cesium.Color.WHITE;
      window.earth.scene.colorCorrection.saturation = 3.9;
      window.earth.scene.colorCorrection.brightness = 0.8;
      window.earth.scene.colorCorrection.contrast = 1.0;
      window.earth.scene.colorCorrection.hue = 0.0;
    },
    /**
     * 画缓冲区
     * @param {string!|number!} 没id不画
     * @param {geometry!} 没geometry不画
     * @param {radius?} 单位[米] 先默认 不屌他
     */
    async drawPopulationCircle(id, { lng, lat }, raidus = 500) {
      console.log("[drawPopulationCircle]", lng, lat);
      const circleEntity = new Cesium.Entity({
        position: Cesium.Cartesian3.fromDegrees(lng, lat, 0),
        ellipse: {
          semiMinorAxis: raidus,
          semiMajorAxis: raidus,
          height: 4,
          material: Cesium.Color.WHITE.withAlpha(0.2),
          outline: true,
          outlineWidth: 3,
          outlineColor: Cesium.Color.WHITE,
        },
        name: id,
      });
      this.medicalCircleCollection.entities.add(circleEntity);
      this.populationCircleList[circleEntity.name] = circleEntity;
      const result = await getPopulation({ lng, lat });
      const circleLabelEntity = new Cesium.Entity({
        position: Cesium.Cartesian3.fromDegrees(lng, lat, 200),
        label: {
          text: `周边500米实时人口\n时间:${result.task_time}\n人数:${result.data}人`,
          fillColor: Cesium.Color.YELLOW,
          font: "strong 16px MicroSoft YaHei",
          outlineWidth: 2,
          outlineColor: Cesium.Color.GRAY,
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          distanceDisplayCondition: new Cesium.DistanceDisplayCondition(
            0,
            10000
          ),
          eyeOffset: new Cesium.Cartesian3(0.0, -160.0, 0),
          scaleByDistance: new Cesium.NearFarScalar(5000, 1, 10000, 0.5),
        },
        name: id,
      });
      this.populationCircleLabelList[
        circleLabelEntity.name
      ] = circleLabelEntity;
      this.medicalCircleLabelCollection.entities.add(circleLabelEntity);
      this.drawPopulationScan(true, id, { lng, lat });
    },
    /**
     * 删缓冲区
     * @param {string|number|undefined} 有id删id 没id删全部
     */
    removePopulationCircle(id) {
      id
        ? this.medicalCircleCollection.entities.removeById(
            this.populationCircleList[id].id
          )
        : this.medicalCircleCollection.entities.removeAll();
      id
        ? this.medicalCircleLabelCollection.entities.removeById(
            this.populationCircleLabelList[id].id
          )
        : this.medicalCircleLabelCollection.entities.removeAll();

      this.drawPopulationScan(false);
    },
  },
};
</script>

<style lang="less" scoped></style>
