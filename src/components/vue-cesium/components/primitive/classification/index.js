import ClassificationPrimitive from './ClassificationPrimitive.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(ClassificationPrimitive.name, ClassificationPrimitive)
}

export default plugin

export { ClassificationPrimitive, plugin as install }
