import BingMapsImageryProvider from './BingMapsImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(BingMapsImageryProvider.name, BingMapsImageryProvider)
}

export default plugin

export { BingMapsImageryProvider, plugin as install }
