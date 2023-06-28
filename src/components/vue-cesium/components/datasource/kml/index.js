import KmlDataSource from './KmlDataSource.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(KmlDataSource.name, KmlDataSource)
}

export default plugin

export { KmlDataSource, plugin as install }
