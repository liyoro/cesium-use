import Cesium3DTilesetGraphics from './Cesium3DTilesetGraphics.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(Cesium3DTilesetGraphics.name, Cesium3DTilesetGraphics)
}

export default plugin

export { Cesium3DTilesetGraphics, plugin as install }
