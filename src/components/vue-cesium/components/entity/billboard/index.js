import BillboardGraphics from './BillboardGraphics.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(BillboardGraphics.name, BillboardGraphics)
}

export default plugin

export { BillboardGraphics, plugin as install }
