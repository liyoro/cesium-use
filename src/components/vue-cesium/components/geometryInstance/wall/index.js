import WallGeometry from './WallGeometry.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(WallGeometry.name, WallGeometry)
}

export default plugin

export { WallGeometry, plugin as install }
