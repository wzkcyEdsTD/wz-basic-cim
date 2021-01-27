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
  beforeDestroy() {},
  methods: {
    ...mapActions("map", []),
    initScene() {},
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
