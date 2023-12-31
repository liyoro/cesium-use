import GroundPolylinePrimitive from './GroundPolylinePrimitive.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(GroundPolylinePrimitive.name, GroundPolylinePrimitive)
}

export default plugin

export { GroundPolylinePrimitive, plugin as install }
