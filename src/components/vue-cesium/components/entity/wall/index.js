import WallGraphics from './WallGraphics.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(WallGraphics.name, WallGraphics)
}

export default plugin

export { WallGraphics, plugin as install }
