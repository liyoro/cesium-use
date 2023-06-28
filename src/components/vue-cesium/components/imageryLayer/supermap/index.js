import SuperMapImageryProvider from './SuperMapImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(SuperMapImageryProvider.name, SuperMapImageryProvider)
}

export default plugin

export { SuperMapImageryProvider, plugin as install }
