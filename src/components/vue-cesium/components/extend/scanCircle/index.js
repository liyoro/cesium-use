import VcScanCircle from './VcScanCircle.vue'
import * as PostProcessStage from '../../stage'

// eslint-disable-next-line no-unused-vars
function plugin(Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.use(PostProcessStage)
  Vue.component(VcScanCircle.name, VcScanCircle)
}

export default plugin

export { VcScanCircle, plugin as install }
