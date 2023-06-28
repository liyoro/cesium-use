import ArcGisMapServerImageryProvider from './ArcGisMapServerImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(ArcGisMapServerImageryProvider.name, ArcGisMapServerImageryProvider)
}

export default plugin

export { ArcGisMapServerImageryProvider, plugin as install }
