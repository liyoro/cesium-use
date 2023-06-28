import PostProcessStage from './PostProcessStage.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PostProcessStage.name, PostProcessStage)
}

export default plugin

export { PostProcessStage, plugin as install }
