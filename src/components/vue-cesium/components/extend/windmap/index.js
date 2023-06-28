import VcWindMap from './VcWindMap.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.component(VcWindMap.name, VcWindMap)
}

export default plugin

export { VcWindMap, plugin as install }
