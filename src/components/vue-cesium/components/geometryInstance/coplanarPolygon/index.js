import CoplanarPolygonGeometry from './CoplanarPolygonGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CoplanarPolygonGeometry.name, CoplanarPolygonGeometry)
}

export default plugin

export { CoplanarPolygonGeometry, plugin as install }
