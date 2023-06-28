import MapboxImageryProvider from './MapboxImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(MapboxImageryProvider.name, MapboxImageryProvider)
}

export default plugin

export { MapboxImageryProvider, plugin as install }
