import PolygonGraphics from './PolygonGraphics.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PolygonGraphics.name, PolygonGraphics)
}

export default plugin

export { PolygonGraphics, plugin as install }
