import EllipsoidGraphics from './EllipsoidGraphics.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(EllipsoidGraphics.name, EllipsoidGraphics)
}

export default plugin

export { EllipsoidGraphics, plugin as install }
