import SphereOutlineGeometry from './SphereOutlineGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(SphereOutlineGeometry.name, SphereOutlineGeometry)
}

export default plugin

export { SphereOutlineGeometry, plugin as install }
