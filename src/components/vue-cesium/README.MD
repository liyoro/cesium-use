
因为 [vue-cesium-v2](`https://github.com/zouyaoji/vue-cesium-v2`) 不再维护，有些bug，修改为本地引用。



## `vue-cesium` 依赖

```
"@amap/amap-jsapi-loader": "0.0.1",
"@sakitam-gis/kriging": "^0.1.0",
"@turf/helpers": "^6.1.4",
"@turf/isobands": "^5.1.5",
"@turf/area": "^6.0.1",
"@zouyaoji/heatmap.js": "^2.0.8",
"lodash-es": "^4.17.20",
"leaflet": "^1.6.0",
"proj4": "^2.6.0",
"urijs": "^1.19.11"
```

## 使用

`vue-cesium` 文件夹放 `components` 目录，`main.js` 文件里面配置引用如下：

```
import VueCesium from '@/components/vue-cesium'
import lang from '@/components/vue-cesium/lang/zh-hans'
import '@/components/vue-cesium/assets/styles/main.scss'
Vue.use(VueCesium, {
  cesiumPath: './libs/Cesium/Cesium.js',
  // cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js',
  // If you need to use Cesium ion resources, you need to specify it. Go to https://cesium.com/ion/ to apply for an account and get Access Token. If it is not specified, it may cause the loading of CesiumIon's online images and terrain to fail.
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5YzY3ZmIzYi01NTA2LTQ1NzEtYmJkMi0xYjMxN2QyYjgxMDAiLCJpZCI6MTQ2OTk3LCJpYXQiOjE2ODcyMjk3NzN9.mKClS7KJhQx4Y-WsFW5NHd0JyCzaURb-N3khTx7Vmgs',
  lang: lang // 2.0.3+ //  zh-hans
})
```