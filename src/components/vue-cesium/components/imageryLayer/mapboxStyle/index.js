import MapboxStyleImageryProvider from './MapboxStyleImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(MapboxStyleImageryProvider.name, MapboxStyleImageryProvider)
}

export default plugin

export { MapboxStyleImageryProvider, plugin as install }
