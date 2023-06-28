import VcHTMLOverlay from './VcHTMLOverlay.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcHTMLOverlay.name, VcHTMLOverlay)
}

export default plugin

export { VcHTMLOverlay, plugin as install }
