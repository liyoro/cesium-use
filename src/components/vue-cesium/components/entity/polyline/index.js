import PolylineGraphics from './PolylineGraphics.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PolylineGraphics.name, PolylineGraphics)
}

export default plugin

export { PolylineGraphics, plugin as install }
