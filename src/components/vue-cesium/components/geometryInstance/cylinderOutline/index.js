import CylinderOutlineGeometry from './CylinderOutlineGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CylinderOutlineGeometry.name, CylinderOutlineGeometry)
}

export default plugin

export { CylinderOutlineGeometry, plugin as install }
