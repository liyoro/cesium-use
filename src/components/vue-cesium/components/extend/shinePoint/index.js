import VcShinePoint from './VcShinePoint.vue'
import * as Entity from '../../entity'
import * as PointGraphics from '../../entity/point'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.use(Entity)
  Vue.use(PointGraphics)

  Vue.component(VcShinePoint.name, VcShinePoint)
}

export default plugin

export { VcShinePoint, plugin as install }
