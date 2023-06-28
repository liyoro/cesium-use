import Polyline from './Polyline.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(Polyline.name, Polyline)
}

export default plugin

export { Polyline, plugin as install }
