import TileMapServiceImageryProvider from './TileMapServiceImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(TileMapServiceImageryProvider.name, TileMapServiceImageryProvider)
}

export default plugin

export { TileMapServiceImageryProvider, plugin as install }
