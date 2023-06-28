import EllipseGraphics from './EllipseGraphics.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(EllipseGraphics.name, EllipseGraphics)
}

export default plugin

export { EllipseGraphics, plugin as install }
