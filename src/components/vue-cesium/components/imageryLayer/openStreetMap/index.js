import OpenStreetMapImageryProvider from './OpenStreetMapImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(OpenStreetMapImageryProvider.name, OpenStreetMapImageryProvider)
}

export default plugin

export { OpenStreetMapImageryProvider, plugin as install }
