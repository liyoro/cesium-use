import PointGraphics from './PointGraphics.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PointGraphics.name, PointGraphics)
}

export default plugin

export { PointGraphics, plugin as install }
