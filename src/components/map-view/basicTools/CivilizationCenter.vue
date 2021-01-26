<template>
  <div class="ThreeDContainer civilization-center" :style="{ width: '200px' }"></div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "CivilizationCenter",
  data() {
    return {};
  },
  async mounted() {
    this.initBimScene();
  },
  beforeDestroy() {},
  methods: {
    ...mapActions("map", []),
    //  初始化BIM场景
    initBimScene() {},
  },
};
</script>
