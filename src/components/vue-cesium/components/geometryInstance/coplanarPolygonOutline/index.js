import CoplanarPolygonOutlineGeometry from './CoplanarPolygonOutlineGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CoplanarPolygonOutlineGeometry.name, CoplanarPolygonOutlineGeometry)
}

export default plugin

export { CoplanarPolygonOutlineGeometry, plugin as install }
