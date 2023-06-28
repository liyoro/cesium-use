import PlaneOutlineGeometry from './PlaneOutlineGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PlaneOutlineGeometry.name, PlaneOutlineGeometry)
}

export default plugin

export { PlaneOutlineGeometry, plugin as install }
