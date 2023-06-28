import RectangleGraphics from './RectangleGraphics.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(RectangleGraphics.name, RectangleGraphics)
}

export default plugin

export { RectangleGraphics, plugin as install }
