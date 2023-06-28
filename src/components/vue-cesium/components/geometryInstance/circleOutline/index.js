import CircleOutlineGeometry from './CircleOutlineGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CircleOutlineGeometry.name, CircleOutlineGeometry)
}

export default plugin

export { CircleOutlineGeometry, plugin as install }
