import RectangleOutlineGeometry from './RectangleOutlineGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(RectangleOutlineGeometry.name, RectangleOutlineGeometry)
}

export default plugin

export { RectangleOutlineGeometry, plugin as install }
