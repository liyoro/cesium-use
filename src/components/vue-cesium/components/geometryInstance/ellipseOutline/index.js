import EllipseOutlineGeometry from './EllipseOutlineGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(EllipseOutlineGeometry.name, EllipseOutlineGeometry)
}

export default plugin

export { EllipseOutlineGeometry, plugin as install }
