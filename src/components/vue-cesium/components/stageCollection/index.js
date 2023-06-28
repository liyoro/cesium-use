import PostProcessStageCollection from './PostProcessStageCollection.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PostProcessStageCollection.name, PostProcessStageCollection)
}

export default plugin

export { PostProcessStageCollection, plugin as install }
