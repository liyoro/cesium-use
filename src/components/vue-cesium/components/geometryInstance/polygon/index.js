import PolygonGeometry from './PolygonGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PolygonGeometry.name, PolygonGeometry)
}

export default plugin

export { PolygonGeometry, plugin as install }
