import PolylineVolumeOutlineGeometry from './PolylineVolumeOutlineGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PolylineVolumeOutlineGeometry.name, PolylineVolumeOutlineGeometry)
}

export default plugin

export { PolylineVolumeOutlineGeometry, plugin as install }
