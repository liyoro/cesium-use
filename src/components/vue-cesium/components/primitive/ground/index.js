import GroundPrimitive from './GroundPrimitive.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(GroundPrimitive.name, GroundPrimitive)
}

export default plugin

export { GroundPrimitive, plugin as install }
