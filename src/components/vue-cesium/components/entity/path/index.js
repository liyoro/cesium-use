import PathGraphics from './PathGraphics.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PathGraphics.name, PathGraphics)
}

export default plugin

export { PathGraphics, plugin as install }
