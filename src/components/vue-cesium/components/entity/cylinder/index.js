import CylinderGraphics from './CylinderGraphics.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CylinderGraphics.name, CylinderGraphics)
}

export default plugin

export { CylinderGraphics, plugin as install }
