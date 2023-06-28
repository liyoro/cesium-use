import ImageryLayer from './ImageryLayer.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(ImageryLayer.name, ImageryLayer)
}

export default plugin

export { ImageryLayer, plugin as install }
