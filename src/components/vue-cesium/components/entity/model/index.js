import ModelGraphics from './ModelGraphics.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(ModelGraphics.name, ModelGraphics)
}

export default plugin

export { ModelGraphics, plugin as install }
