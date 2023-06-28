import CorridorGraphics from './CorridorGraphics.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CorridorGraphics.name, CorridorGraphics)
}

export default plugin

export { CorridorGraphics, plugin as install }
