import CustomDataSource from './CustomDataSource.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CustomDataSource.name, CustomDataSource)
}

export default plugin

export { CustomDataSource, plugin as install }
