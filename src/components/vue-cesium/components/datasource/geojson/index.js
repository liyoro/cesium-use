import GeoJsonDataSource from './GeoJsonDataSource.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(GeoJsonDataSource.name, GeoJsonDataSource)
}

export default plugin

export { GeoJsonDataSource, plugin as install }
