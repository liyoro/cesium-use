import CzmlDataSource from './CzmlDataSource.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CzmlDataSource.name, CzmlDataSource)
}

export default plugin

export { CzmlDataSource, plugin as install }
