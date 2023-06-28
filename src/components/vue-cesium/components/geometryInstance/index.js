import GeometryInstance from './GeometryInstance.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(GeometryInstance.name, GeometryInstance)
}

export default plugin

export { GeometryInstance, plugin as install }
