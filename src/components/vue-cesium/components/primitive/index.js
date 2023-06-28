import Primitive from './Primitive.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(Primitive.name, Primitive)
}

export default plugin

export { Primitive, plugin as install }
