<script>
import {
  url,
  layers,
  enablePickFeatures,
  getFeatureInfoFormats,
  rectangle,
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight,
  minimumLevel,
  maximumLevel,
  credit,
  subdomains,
  clock,
  times,
  token,
  format
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-wms',
  mixins: [
    url,
    layers,
    enablePickFeatures,
    getFeatureInfoFormats,
    rectangle,
    tilingScheme,
    ellipsoid,
    tileWidth,
    tileHeight,
    minimumLevel,
    maximumLevel,
    credit,
    subdomains,
    clock,
    times,
    token,
    format,
    mixinImageryProvider
  ],
  props: {
    parameters: Object,
    getFeatureInfoParameters: Object,
    crs: String,
    srs: String
  }
}
</script>
