import VcOverviewMap from './VcOverviewMap.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcOverviewMap.name, VcOverviewMap)
}

export default plugin

export { VcOverviewMap, plugin as install }
