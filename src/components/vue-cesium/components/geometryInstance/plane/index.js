import PlaneGeometry from './PlaneGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PlaneGeometry.name, PlaneGeometry)
}

export default plugin

export { PlaneGeometry, plugin as install }
