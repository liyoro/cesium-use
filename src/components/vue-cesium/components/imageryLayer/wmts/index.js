import WebMapTileServiceImageryProvider from './WebMapTileServiceImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(WebMapTileServiceImageryProvider.name, WebMapTileServiceImageryProvider)
}

export default plugin

export { WebMapTileServiceImageryProvider, plugin as install }
