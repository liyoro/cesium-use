import Billboard from './Billboard.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(Billboard.name, Billboard)
}

export default plugin

export { Billboard, plugin as install }
