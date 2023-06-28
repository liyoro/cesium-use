import CylinderGeometry from './CylinderGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CylinderGeometry.name, CylinderGeometry)
}

export default plugin

export { CylinderGeometry, plugin as install }
