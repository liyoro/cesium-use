import VcPolylineTrail from './VcPolylineTrail.vue'
// 按需引入该组件时自动引入下面组件才能正常工作
import * as Entity from '../../entity'
import * as PolylineGraphics from '../../entity/polyline'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.use(Entity)
  Vue.use(PolylineGraphics)

  Vue.component(VcPolylineTrail.name, VcPolylineTrail)
}

export default plugin

export { VcPolylineTrail, plugin as install }
