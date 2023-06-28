import PolylineVolumeGraphics from './PolylineVolumeGraphics.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PolylineVolumeGraphics.name, PolylineVolumeGraphics)
}

export default plugin

export { PolylineVolumeGraphics, plugin as install }
