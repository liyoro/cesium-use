import LabelCollection from './LabelCollection.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(LabelCollection.name, LabelCollection)
}

export default plugin

export { LabelCollection, plugin as install }
