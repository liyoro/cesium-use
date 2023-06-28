import Entity from './Entity.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(Entity.name, Entity)
}

export default plugin

export { Entity, plugin as install }
