import FrustumOutlineGeometry from './FrustumOutlineGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(FrustumOutlineGeometry.name, FrustumOutlineGeometry)
}

export default plugin

export { FrustumOutlineGeometry, plugin as install }
