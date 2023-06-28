<!--
 * @Author: liyoro
 * @Date: 2023-06-24 13:41:41
 * @LastEditors: liyoro
 * @LastEditTime: 2023-06-24 17:09:47
 * @Description: cesium卷帘控件
 * 'cesium-map-split': () => import('@/components/cesium/mapSplit.vue'),
-->
<template>
  <div id="cesium-image-layer-split" class="cesium-map-split">
      <!-- arcgis -->
      <vc-layer-imagery :splitDirection="-1" :sort-order="10">
        <vc-provider-imagery-arcgis-mapserver
         :url="url"
         :maximum-level="maximumLevel" />
      </vc-layer-imagery>
      <!-- 高德 -->
      <vc-layer-imagery :splitDirection="1" :sort-order="10">
        <vc-provider-imagery-tianditu
          map-style="img_w"
          token="f51cd476ac10d6ecd00488562d080032"
        ></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
  </div>
</template>

<script>
export default {
  name: 'cesium-map-split',
  components: {},
  // const { Cesium, viewer } = cesiumInstance
  props: {
    cesiumInstance: {
      type: Object,
      default: () => (null)
    }
  },
  data() {
    return {
      // slider: null,
      handler: null,
      url: 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer',
      maximumLevel: 18,
    }
  },
  computed: {},
  watch: {},
  beforeDestroy() {},
  mounted() {
    if (!this.cesiumInstance) return
    const { Cesium, viewer } = this.cesiumInstance

    const slider = document.getElementById('cesium-image-layer-split')
    viewer.scene.splitPosition = slider.offsetLeft / slider.parentElement.offsetWidth
    this.handler = new Cesium.ScreenSpaceEventHandler(slider)
    let moveActive = false // 是否允许卷帘滑动

    this.handler.setInputAction(() => {
      moveActive = true
    }, Cesium.ScreenSpaceEventType.LEFT_DOWN)

    this.handler.setInputAction(e => {
      if (!moveActive) {
        return
      }

      const splitPosition = (slider.offsetLeft + e.endPosition.x) / slider.parentElement.offsetWidth
      slider.style.left = 100.0 * splitPosition + '%'
      viewer.scene.splitPosition = splitPosition
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)

    this.handler.setInputAction(() => {
      moveActive = false
    }, Cesium.ScreenSpaceEventType.LEFT_UP)
  },
  created() {},
  updated() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.cesium-map-split {
  position: absolute;
  width: 6px;
  height: 100%;
  top: 0;
  left: 49.9%;
  background-color: #ffffff;
  cursor: move;
  z-index: 999;
}
</style>
