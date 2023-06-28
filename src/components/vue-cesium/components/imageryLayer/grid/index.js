import GridImageryProvider from './GridImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(GridImageryProvider.name, GridImageryProvider)
}

export default plugin

export { GridImageryProvider, plugin as install }
