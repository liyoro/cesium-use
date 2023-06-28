import ArcGISTiledElevationTerrainProvider from './ArcGISTiledElevationTerrainProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(ArcGISTiledElevationTerrainProvider.name, ArcGISTiledElevationTerrainProvider)
}

export default plugin

export { ArcGISTiledElevationTerrainProvider, plugin as install }
