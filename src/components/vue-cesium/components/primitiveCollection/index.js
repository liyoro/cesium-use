import PrimitiveCollection from './PrimitiveCollection.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PrimitiveCollection.name, PrimitiveCollection)
}

export default plugin

export { PrimitiveCollection, plugin as install }
