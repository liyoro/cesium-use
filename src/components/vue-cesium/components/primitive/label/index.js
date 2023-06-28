import Label from './Label.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(Label.name, Label)
}

export default plugin

export { Label, plugin as install }
