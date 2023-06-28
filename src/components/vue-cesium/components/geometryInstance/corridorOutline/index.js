import CorridorOutlineGeometry from './CorridorOutlineGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CorridorOutlineGeometry.name, CorridorOutlineGeometry)
}

export default plugin

export { CorridorOutlineGeometry, plugin as install }
