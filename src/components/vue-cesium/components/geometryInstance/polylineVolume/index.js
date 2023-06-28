import PolylineVolumeGeometry from './PolylineVolumeGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PolylineVolumeGeometry.name, PolylineVolumeGeometry)
}

export default plugin

export { PolylineVolumeGeometry, plugin as install }
