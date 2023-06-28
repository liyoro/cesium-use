import PolylineGeometry from './PolylineGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PolylineGeometry.name, PolylineGeometry)
}

export default plugin

export { PolylineGeometry, plugin as install }
