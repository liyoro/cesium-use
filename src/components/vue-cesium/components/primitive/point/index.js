import PointPrimitive from './PointPrimitive.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PointPrimitive.name, PointPrimitive)
}

export default plugin

export { PointPrimitive, plugin as install }
