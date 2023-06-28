import TileCoordinatesImageryProvider from './TileCoordinatesImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(TileCoordinatesImageryProvider.name, TileCoordinatesImageryProvider)
}

export default plugin

export { TileCoordinatesImageryProvider, plugin as install }
