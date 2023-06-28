<!--
 * @Author: liyoro
 * @Date: 2023-06-24 15:33:33
 * @LastEditors: liyoro
 * @LastEditTime: 2023-06-24 17:09:58
 * @Description: cesium分屏控件
 * 'cesium-map-double': () => import('@/components/cesium/doubleCompare.vue')
-->
<template>
  <div id="cesium-image-layer-double" class="cesium-map-double">
    <div class="cesium-container-left">
      <vc-viewer
        ref="vcViewer"
        class="map-view"
        :logo="mapConfig.logo"
        :camera="camera"
        :infoBox="mapConfig.infoBox"
        :animation="mapConfig.animation"
        :timeline="mapConfig.timeline"
        :shouldAnimate="mapConfig.shouldAnimate"
        :sceneMode="mapConfig.sceneMode"
        :scene3DOnly="mapConfig.scene3DOnly"
        :geocoder="false"
        @ready="readyLeft"
      >
        <!-- arcgis -->
        <vc-layer-imagery :sort-order="10">
          <vc-provider-imagery-arcgis-mapserver :url="url" :maximum-level="maximumLevel" />
        </vc-layer-imagery>
      </vc-viewer>
    </div>
    <div class="cesium-container-right">
      <vc-viewer
        ref="vcViewer"
        class="map-view"
        :logo="mapConfig.logo"
        :camera="camera"
        :infoBox="mapConfig.infoBox"
        :animation="mapConfig.animation"
        :timeline="mapConfig.timeline"
        :shouldAnimate="mapConfig.shouldAnimate"
        :sceneMode="mapConfig.sceneMode"
        :scene3DOnly="mapConfig.scene3DOnly"
        :geocoder="false"
        @ready="readyRight"
      >
        <!-- 高德 -->
        <vc-layer-imagery :sort-order="10">
          <vc-provider-imagery-tianditu
            map-style="img_w"
            token="f51cd476ac10d6ecd00488562d080032"
          ></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cesium-map-double',
  components: {},
  props: {},
  data() {
    return {
      mapConfig: {
        logo: false,
        infoBox: false, // 是否显示点击要素之后显示的信息
        animation: false, // 如果设置为false，将不会创建左下角动画小部件
        timeline: false, // 如果设置为false，则不会创建正下方时间轴小部件
        sceneMode: 3, // 初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode
        scene3DOnly: true, // 为 true 时，每个几何实例将仅以3D渲染以节省GPU内存
        shouldAnimate: false // 默认true ，否则为 false 。此选项优先于设置 Viewer＃clockViewModel
        // sceneModePicker: false, // 如果设置为false，将不会创建右上角投影方式控件(显示二三维切换按钮)
        // baseLayerPicker: false, // 如果设置为false，将不会创建右上角图层按钮
        // sortOrder: 20,
      },
      camera: {
        position: {
          lng: 110.286109,
          lat: 21.609988,
          height: 2000
        },
        heading: 0,
        pitch: 0,
        roll: 0
      },
      handler: null,
      url: 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer',
      maximumLevel: 18,
      //
      isLeftTrigger: false,
      isRightTrigger: false,
      viewerLeft: null,
      viewerRight: null
    }
  },
  computed: {},
  watch: {},
  beforeDestroy() {
    this.viewerLeft = null
    this.viewerRight = null
  },
  mounted() {},
  created() {},
  updated() {},
  methods: {
    readyLeft(cesiumInstance) {
      // eslint-disable-next-line no-unused-vars
      const { Cesium, viewer } = cesiumInstance
      this.viewerLeft = viewer
      const canvasL = viewer.scene.canvas
      const handlerL = new Cesium.ScreenSpaceEventHandler(canvasL)
      handlerL.setInputAction(() => {
        this.isLeftTrigger = true
        this.isRightTrigger = false
      }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
      viewer.camera.changed.addEventListener(this.syncViewerL)
      viewer.scene.preRender.addEventListener(this.syncViewerL)
    },
    readyRight(cesiumInstance) {
      // eslint-disable-next-line no-unused-vars
      const { Cesium, viewer } = cesiumInstance
      this.viewerRight = viewer
      const canvasR = viewer.scene.canvas
      const handlerR = new Cesium.ScreenSpaceEventHandler(canvasR)
      handlerR.setInputAction(() => {
        this.isLeftTrigger = false
        this.isRightTrigger = true
      }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
      viewer.camera.changed.addEventListener(this.syncViewerR)
      viewer.scene.preRender.addEventListener(this.syncViewerR)
    },
    syncViewerL() {
      if (this.isLeftTrigger) {
        this.viewerRight.camera.flyTo({
          destination: this.viewerLeft.camera.position,
          orientation: {
            heading: this.viewerLeft.camera.heading,
            pitch: this.viewerLeft.camera.pitch,
            roll: this.viewerLeft.camera.roll
          },
          duration: 0.0
        })
      }
    },
    syncViewerR() {
      if (this.isRightTrigger) {
        this.viewerLeft.camera.flyTo({
          destination: this.viewerRight.camera.position,
          orientation: {
            heading: this.viewerRight.camera.heading,
            pitch: this.viewerRight.camera.pitch,
            roll: this.viewerRight.camera.roll
          },
          duration: 0.0
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cesium-map-double {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 998;
  .cesium-container-left {
    position: absolute;
    width: 50%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .cesium-container-right {
    position: absolute;
    width: 50%;
    height: 100%;
    right: 0;
    bottom: 0;
  }
}
</style>
