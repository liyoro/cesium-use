import RectangleGeometry from './RectangleGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(RectangleGeometry.name, RectangleGeometry)
}

export default plugin

export { RectangleGeometry, plugin as install }
