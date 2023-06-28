import GroundPolylineGeometry from './GroundPolylineGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(GroundPolylineGeometry.name, GroundPolylineGeometry)
}

export default plugin

export { GroundPolylineGeometry, plugin as install }
