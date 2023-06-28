import Model from './Model.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(Model.name, Model)
}

export default plugin

export { Model, plugin as install }
