import FrustumGeometry from './FrustumGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(FrustumGeometry.name, FrustumGeometry)
}

export default plugin

export { FrustumGeometry, plugin as install }
