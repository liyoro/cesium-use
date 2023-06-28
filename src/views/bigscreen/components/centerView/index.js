import { mapGetters } from 'vuex'
// import axios from 'axios'
// import { findElem } from '@/utils/index'

// const getMapJson = (url) => {
//   return axios.get(`data/map/${url}.json`)
// }

export default {
  name: 'CenterView',
  components: {
    // 'g-map-view': () => import('@/components/chart/map/g-map-view.vue')
    'cesium-map-split': () => import('@/components/cesium/mapSplit.vue'),
    'cesium-map-double': () => import('@/components/cesium/doubleCompare.vue'),
    'cesium-map-bookmark': () => import('@/components/cesium/bookmark.vue'),
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      mapOpt: {},
      areaCode: 4400,
      mapName: '广东省',
      mapData: [],
      // viewer
      curCesiumInstance: null,
      // 天地图
      mapConfig: {
        logo: false,
        infoBox: false, // 是否显示点击要素之后显示的信息
        animation: false, // 如果设置为false，将不会创建左下角动画小部件
        timeline: false, // 如果设置为false，则不会创建正下方时间轴小部件
        sceneMode: 3, // 初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode
        scene3DOnly: true, // 为 true 时，每个几何实例将仅以3D渲染以节省GPU内存
        shouldAnimate: false, // 默认true ，否则为 false 。此选项优先于设置 Viewer＃clockViewModel
        contextOptions: {
          webgl: {
            alpha: true,
            depth: true,
            stencil: true,
            antialias: true,
            premultipliedAlpha: true,
            // 通过canvas.toDataURL()实现截图需要将该项设置为true
            preserveDrawingBuffer: true,
            failIfMajorPerformanceCaveat: true
          }
        }
        // sceneModePicker: false, // 如果设置为false，将不会创建右上角投影方式控件(显示二三维切换按钮)
        // baseLayerPicker: false, // 如果设置为false，将不会创建右上角图层按钮
        // sortOrder: 20,
      },
      aMapConfig: {
        contrast: 1,
        mapStyle: '8', // { value: '6', label: '卫星影像' }, { value: '7', label: '道路图' }, { value: '8', label: '道路图（背景透明）' }
        ltype: '0', // { value: '0', label: '默认' }, { value: '4', label: '只有注记' }, { value: '11', label: '只有道路' }
        // minimumLevel: 0,
        // maximumLevel: 18,
        projectionTransforms: {
          form: 'GCJ02',
          to: 'CGCS2000'
        }
      },
      camera: {
        position: {
          lng: 110.286109,
          lat: 21.609988,
          height: 2000,
        },
        heading: 0,
        pitch: 0,
        roll: 0
      },
      url: 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer',
      maximumLevel: 18,
      // 测量工具
      clampToGround: true, // 贴地
      distanceMeasuring: false,
      areaMeasuring: false,
      heightMeasuring: false,
      removeLastPosition: true,
      polylineMaterial: {
        fabric: { type: 'Color', uniforms: { color: 'rgba(28, 193, 255, 1.0)' }}
      },
      polygonMaterial: {
        fabric: { type: 'Color', uniforms: { color: 'rgba(28, 193, 255, 0.26)' }}
      },
      pointColor: 'rgba(28, 193, 255, 1.0)',
      // end
      // 初始点
      centerPoint: {
        description: 'Hello Vue Cesium',
        label: {},
        pixelOffset: { x: 0.0, y: 20 },
        position: { lng: 110.286109, lat: 21.609988, height: 0.0 }
      },
      // end
      // 标签图元
      labels: [],
      // end
      // 弹窗
      poiPopData: {
        showPoiPop: false,
        poiPopPosition: { lng: 0.0, lat: 0.0, height: 0.0 },
        title: ''
      },
      // end
      // 卷帘
      showMapSplit: false,
      // end
      // 分屏
      showMapDoubleCompare: false,
      // end
      // 书签
      showMapBookmark: false,
      // end
      // 视频融合
      showMapVideo: false,
      // end
      // 闪点、涟漪
      showRipple: false,
      shinePoint: {
        position: { lng: 110.286983, lat: 21.607153, height: 500.0 }
      },
      // end
      // 圆形扫描、雷达扫描
      showScanCircle: false,
      showScanRadar: false,
    }
  },
  computed: {
    ...mapGetters(['curLevel', 'levelData'])
  },
  beforeDestroy() {
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {
      console.log('viewer is loaded.')
    })
  },
  created() {
  },
  updated() {},
  methods: {
    initData() {
      this.labels = [
        { position: { lng: 110.286109, lat: 21.609988, height: 50.0 }, text: '廉江市政府', image: './images/normal.png' },
        { position: { lng: 110.286983, lat: 21.607153, height: 50.0 }, text: '廉江市图书馆', image: './images/normal.png' }
      ]
    },
    // 中间 url
    initMap() {},
    ready(cesiumInstance) {
      // eslint-disable-next-line no-unused-vars
      const { Cesium, viewer } = cesiumInstance
      this.curCesiumInstance = cesiumInstance

      viewer.scene.globe.depthTestAgainstTerrain = true
      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(110.286109, 21.609988, 3500.0),
        orientation: {
          heading: Cesium.Math.toRadians(0), // east, default value is 0.0 (north) //东西南北朝向
          pitch: Cesium.Math.toRadians(-90), // default value (looking down)  //俯视仰视视觉
          roll: 0.0 // default value
        },
        duration: 3 // 3秒到达战场
      })
      // viewer._cesiumWidget._creditContainer.style.display = 'none' // 隐藏版权
      // 在这儿获取Cesium和viewer实例，再执行相关逻辑代码
      // this.camera.position.lng = 116.46
      // this.camera.position.lat = 39.92
      // this.camera.position.height = 3000
      // viewer.imageryLayers.addImageryProvider(
      //   new Cesium.UrlTemplateImageryProvider({
      //     url: 'http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8',
      //   })
      // )
      this.initData()
    },
    // 测量工具
    toggle(type) {
      this.$refs[type].measuring = !this.$refs[type].measuring
    },
    clear() {
      this.$refs.measureDistance.clear()
      this.$refs.measureArea.clear()
      this.$refs.measureHeight.clear()
    },
    activeEvt(_) {
      this[_.type] = _.isActive
    },
    // eslint-disable-next-line no-unused-vars
    measureEvt(result) {
      // console.log(result)
    },
    // eslint-disable-next-line no-unused-vars
    movingEvt(position) {
      // console.log(position)
    },
    labelClick(item) {
      // console.log(item)
      this.poiPopData.poiPopPosition = item.position
      this.poiPopData.showPoiPop = true
      this.poiPopData.title = item.text
      this.flyToPoi(item.position)
    },
    closePoiPop() {
      this.poiPopData = {
        showPoiPop: false,
        poiPopPosition: { lng: 0.0, lat: 0.0, height: 0.0 },
        title: ''
      }
    },
    flyToPoi(position) {
      const { Cesium, viewer } = this.curCesiumInstance

      viewer?.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(position.lng, position.lat, 3500.0),
        orientation: {
          heading: Cesium.Math.toRadians(0), // east, default value is 0.0 (north) //东西南北朝向
          pitch: Cesium.Math.toRadians(-90), // default value (looking down)  //俯视仰视视觉
          roll: 0.0 // default value
        },
        duration: 3 // 3秒到达战场
      })
    },
    mapSplitClick() {
      if (this.curCesiumInstance && this.showMapSplit === false) {
        this.showMapSplit = true
      } else {
        this.showMapSplit = false
      }
    },
    mapDoubleClick() {
      if (this.curCesiumInstance && this.showMapDoubleCompare === false) {
        this.showMapDoubleCompare = true
      } else {
        this.showMapDoubleCompare = false
      }
    },
    mapBookmarkClick() {
      if (this.curCesiumInstance && this.showMapBookmark === false) {
        this.showMapBookmark = true
      } else {
        this.showMapBookmark = false
      }
    },
    mapVideoClick() {
      if (this.curCesiumInstance && this.showMapVideo === false) {
        this.showMapVideo = true

        const { Cesium, viewer } = this.curCesiumInstance
        // const videoElement = document.getElementById('mapVideo')
        this.$nextTick(() => {
          const videoElement = this.$refs.mapVideo
          // console.log(videoElement)
          // videoElement.play()
          viewer.showRenderLoopErrors = false
          viewer.shouldAnimate = true
          // const temp = viewer.entities.add({
          //   polygon: {
          //     hierarchy: Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArray([110.285278, 21.610168, 110.286517, 21.610781, 110.285712, 21.60913, 110.287155, 21.610008])),
          //     // hierarchy: Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArray([114.25, 30.34, 114.30, 30.34, 114.30, 30.36, 114.25, 30.36])),
          //     classificationType: Cesium.ClassificationType.BOTH,
          //     material: videoElement,
          //   }
          // })
          // viewer.zoomTo(temp)
          viewer.entities.add({
            polygon: {
              // fromDegreesArrayHeights; fromDegreesArray
              hierarchy: Cesium.Cartesian3.fromDegreesArray([
                110.28532, 21.6101,
                110.285669, 21.609113,
                110.287112, 21.610085,
                110.286565, 21.610754,
              ]),
              material: videoElement, // 将材质设置为video元素
              clampToGround: true
            }
          })
          // 118.69270619292732, 32.15943424628025; 110.286983, 21.607153
          const options = {
            destination: Cesium.Cartesian3.fromDegrees(110.28612, 21.609956, 500),
            orientation: {
              heading: Cesium.Math.toRadians(0), // 水平偏角，默认正北 0
              pitch: Cesium.Math.toRadians(-90), // 俯视角，默认-90，垂直向下
              roll: 0 // 旋转角
            }
          }
          viewer.camera.flyTo(options)
        })
      } else {
        this.showMapVideo = false
      }
    },
    mapRippleClick() {
      if (this.showRipple === false) {
        this.showRipple = true
      } else {
        this.showRipple = false
      }
    },
    mapScanCircleClick() {
      if (this.showScanCircle === false) {
        this.showScanCircle = true
      } else {
        this.showScanCircle = false
      }
    },
    mapScanRadarClick() {
      if (this.showScanRadar === false) {
        this.showScanRadar = true
      } else {
        this.showScanRadar = false
      }
    },
    subReady() {
      this.flyToPoi(this.shinePoint.position)
    }
  }
}
