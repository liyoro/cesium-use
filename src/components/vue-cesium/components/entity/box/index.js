import BoxGraphics from './BoxGraphics.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(BoxGraphics.name, BoxGraphics)
}

export default plugin

export { BoxGraphics, plugin as install }
