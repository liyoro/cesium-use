import TiledCacheImageryProvider from './TiledCacheImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(TiledCacheImageryProvider.name, TiledCacheImageryProvider)
}

export default plugin

export { TiledCacheImageryProvider, plugin as install }
