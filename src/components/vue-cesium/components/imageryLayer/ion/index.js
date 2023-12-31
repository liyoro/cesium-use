import IonImageryProvider from './IonImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(IonImageryProvider.name, IonImageryProvider)
}

export default plugin

export { IonImageryProvider, plugin as install }
