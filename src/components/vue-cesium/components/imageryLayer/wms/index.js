import WebMapServiceImageryProvider from './WebMapServiceImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(WebMapServiceImageryProvider.name, WebMapServiceImageryProvider)
}

export default plugin

export { WebMapServiceImageryProvider, plugin as install }
