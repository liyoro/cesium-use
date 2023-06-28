import TiandituImageryProvider from './TiandituImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(TiandituImageryProvider.name, TiandituImageryProvider)
}

export default plugin

export { TiandituImageryProvider, plugin as install }
