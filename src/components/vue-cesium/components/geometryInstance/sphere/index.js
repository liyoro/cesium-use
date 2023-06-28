import SphereGeometry from './SphereGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(SphereGeometry.name, SphereGeometry)
}

export default plugin

export { SphereGeometry, plugin as install }
