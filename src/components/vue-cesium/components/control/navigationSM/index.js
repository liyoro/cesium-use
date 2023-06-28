import VcNavigationSM from './VcNavigationSM.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcNavigationSM.name, VcNavigationSM)
}

export default plugin

export { VcNavigationSM, plugin as install }
