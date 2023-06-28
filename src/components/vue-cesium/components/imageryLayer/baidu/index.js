import BaiduMapImageryProvider from './BaiduMapImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(BaiduMapImageryProvider.name, BaiduMapImageryProvider)
}

export default plugin

export { BaiduMapImageryProvider, plugin as install }
