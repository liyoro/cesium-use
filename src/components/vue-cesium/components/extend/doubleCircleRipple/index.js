import VcDoubleCircleRipple from './VcDoubleCircleRipple.vue'
// 按需引入该组件时自动引入下面组件才能正常工作
import * as Entity from '../../entity'
import * as EllipseGraphics from '../../entity/ellipse'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.use(Entity)
  Vue.use(EllipseGraphics)

  Vue.component(VcDoubleCircleRipple.name, VcDoubleCircleRipple)
}

export default plugin

export { VcDoubleCircleRipple, plugin as install }
