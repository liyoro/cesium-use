import BillboardCollection from './BillboardCollection.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(BillboardCollection.name, BillboardCollection)
}

export default plugin

export { BillboardCollection, plugin as install }
