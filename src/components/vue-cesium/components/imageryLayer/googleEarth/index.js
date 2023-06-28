import GoogleEarthEnterpriseImageryProvider from './GoogleEarthEnterpriseImageryProvider.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(GoogleEarthEnterpriseImageryProvider.name, GoogleEarthEnterpriseImageryProvider)
}

export default plugin

export { GoogleEarthEnterpriseImageryProvider, plugin as install }
