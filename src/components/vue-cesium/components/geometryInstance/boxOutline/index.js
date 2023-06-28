import BoxOutlineGeometry from './BoxOutlineGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(BoxOutlineGeometry.name, BoxOutlineGeometry)
}

export default plugin

export { BoxOutlineGeometry, plugin as install }
