import LabelGraphics from './LabelGraphics.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(LabelGraphics.name, LabelGraphics)
}

export default plugin

export { LabelGraphics, plugin as install }
