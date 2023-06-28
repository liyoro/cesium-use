import UrlTemplateImageryProvider from './UrlTemplateImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(UrlTemplateImageryProvider.name, UrlTemplateImageryProvider)
}

export default plugin

export { UrlTemplateImageryProvider, plugin as install }
