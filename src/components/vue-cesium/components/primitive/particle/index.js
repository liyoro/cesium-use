import ParticleSystem from './ParticleSystem.vue'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(ParticleSystem.name, ParticleSystem)
}

export default plugin

export { ParticleSystem, plugin as install }
