<template>
  <div class="center-view">
    <!-- 测量工具 -->
    <div class="map-tools-view flex-1">
      <div @click="toggle('measureDistance')" class="tool-item">{{ distanceMeasuring ? '停止' : '距离' }}</div>
      <div @click="toggle('measureArea')" class="tool-item">{{ areaMeasuring ? '停止' : '面积' }}</div>
      <div @click="toggle('measureHeight')" class="tool-item">{{ heightMeasuring ? '停止' : '高度' }}</div>
      <div @click="clear" class="tool-item">清除</div>
    </div>
    <!--  -->
    <div class="map-tools-view map-tools-view-2 flex-1">
      <div @click="mapSplitClick" class="tool-item">{{ showMapSplit ? '停止' : '卷帘' }}</div>
      <div @click="mapDoubleClick" class="tool-item">{{ showMapDoubleCompare ? '停止' : '分屏' }}</div>
      <div @click="mapBookmarkClick" class="tool-item">{{ showMapBookmark ? '关闭' : '书签' }}</div>
      <div @click="mapVideoClick" class="tool-item">{{ showMapVideo ? '关闭' : '视频融合' }}</div>
      <div @click="mapRippleClick" class="tool-item">{{ showRipple ? '关闭' : '涟漪' }}</div>
      <div @click="mapScanCircleClick" class="tool-item">{{ showScanCircle ? '关闭' : '圆形扫描' }}</div>
      <div @click="mapScanRadarClick" class="tool-item">{{ showScanRadar ? '关闭' : '雷达扫描' }}</div>
    </div>
    <!-- <g-map-view class="map-view" /> -->
    <vc-viewer
      ref="vcViewer"
      class="map-view"
      :logo="mapConfig.logo"
      :camera="camera"
      :infoBox="mapConfig.infoBox"
      :animation="mapConfig.animation"
      :timeline="mapConfig.timeline"
      :shouldAnimate="mapConfig.shouldAnimate"
      :sceneMode="mapConfig.sceneMode"
      :scene3DOnly="mapConfig.scene3DOnly"
      :geocoder="true"
      :contextOptions="mapConfig.contextOptions"
      @ready="ready"
    >
      <!-- begin -->
      <vc-measure-distance
        ref="measureDistance"
        :polylineMaterial="polylineMaterial"
        :clamp-to-ground="clampToGround"
        :pointColor="pointColor"
        fillColor="#FFFFFF"
        outlineColor="#FFFFFF"
        font="200 18px SimSun"
        @activeEvt="activeEvt"
        @measureEvt="measureEvt"
        @movingEvt="movingEvt"
        :remove-last-position="removeLastPosition"
      ></vc-measure-distance>
      <vc-measure-area
        ref="measureArea"
        :polylineMaterial="polylineMaterial"
        :polygonMaterial="polygonMaterial"
        :pointColor="pointColor"
        fillColor="#FFFFFF"
        outlineColor="#FFFFFF"
        font="200 18px SimSun"
        @activeEvt="activeEvt"
        @measureEvt="measureEvt"
        @movingEvt="movingEvt"
        :clamp-to-ground="clampToGround"
        :remove-last-position="removeLastPosition"
      ></vc-measure-area>
      <vc-measure-height
        ref="measureHeight"
        :polylineMaterial="polylineMaterial"
        :pointColor="pointColor"
        fillColor="#FFFFFF"
        outlineColor="#FFFFFF"
        font="200 18px SimSun"
        @activeEvt="activeEvt"
        @measureEvt="measureEvt"
        @movingEvt="movingEvt"
      ></vc-measure-height>
      <!-- end -->
      <!--
        'cia_c': 天地图全球中文注记服务（经纬度坐标系）。
        'cia_w': 天地图全球中文注记服务（墨卡托投影坐标系）。
        'cta_c': 天地图全球地形中文注记服务（经纬度坐标系）。
        'cta_w': 天地图全球地形中文注记服务（墨卡托投影坐标系）。
        'cva_c': 天地图全球矢量中文注记服务（经纬度坐标系）。
        'cva_w': 天地图全球矢量中文注记服务（墨卡托投影坐标系）。
        'ela_c': 天地图全球影像英文注记服务（经纬度坐标系）。
        'ela_w': 天地图全球影像英文注记服务（墨卡托投影坐标系）。
        'eva_c': 天地图全球矢量英文注记服务（经纬度坐标系）。
        'eva_w': 天地图全球矢量英文注记服务（墨卡托投影坐标系）。
        'img_c': 天地图全球影像地图服务（经纬度坐标系）。
        'img_w': 天地图全球影像地图服务（墨卡托投影坐标系）。
        'ter_c': 天地图全球地形晕渲服务（经纬度坐标系）。
        'ter_w': 天地图全球地形晕渲服务（墨卡托投影坐标系）。
        'vec_c': 天地图全球矢量地图服务（经纬度坐标系）。
        'vec_w': 天地图全球矢量地图服务（墨卡托投影坐标系） -->
      <!-- 天地图 -->
      <!-- <vc-layer-imagery>
        <vc-provider-imagery-tianditu map-style="img_c" token="f51cd476ac10d6ecd00488562d080032"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
      <vc-layer-imagery>
        <vc-provider-imagery-tianditu map-style="cva_c" token="f51cd476ac10d6ecd00488562d080032"></vc-provider-imagery-tianditu>
      </vc-layer-imagery> -->
      <!-- 高德 + 天地图-->
      <!-- <vc-layer-imagery :contrast="aMapConfig.contrast" :sort-order="10">
        <vc-provider-imagery-amap
          :map-style="aMapConfig.mapStyle"
          :ltype="aMapConfig.ltype"
          :projection-transforms="aMapConfig.projectionTransforms"
        ></vc-provider-imagery-amap>
      </vc-layer-imagery> -->
      <vc-layer-imagery :sort-order="5">
        <vc-provider-imagery-tianditu
          map-style="img_w"
          token="f51cd476ac10d6ecd00488562d080032"
        ></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
      <!-- arcgis -->
      <!-- <vc-layer-imagery>
        <vc-provider-imagery-arcgis-mapserver :url="url" :maximum-level="maximumLevel"></vc-provider-imagery-arcgis-mapserver>
      </vc-layer-imagery> -->
      <!-- 初始点 -->
      <!-- <vc-entity :position="centerPoint.position">
        <vc-graphics-label
          :showBackground="true"
          fillColor="red"
          outlineColor="red"
          :text="centerPoint.description"
          font="200px sans-serif"
          :pixel-offset="centerPoint.pixelOffset"></vc-graphics-label>
      </vc-entity> -->
      <!-- end -->
      <!-- 标签图元+布告板图元 -->
      <vc-collection-primitive-label>
        <template v-for="(item, index) of labels">
          <vc-primitive-label
            :key="'label' + index"
            :text="item.text"
            :position="item.position"
            :showBackground="true"
            :pixelOffset="{ x: 0, y: -48 }"
            :distanceDisplayCondition="{ near: 0, far: 10000 }"
            @click="labelClick(item)">
          </vc-primitive-label>
        </template>
      </vc-collection-primitive-label>
      <vc-collection-primitive-billboard>
        <template v-for="(item, index) of labels">
          <vc-primitive-billboard
            :key="'billboard' + index"
            :width="66"
            :height="66"
            :position="item.position"
            :image="item.image"
            :distanceDisplayCondition="{ near: 0, far: 10000 }"
            @click="labelClick(item)">
          </vc-primitive-billboard>
        </template>
      </vc-collection-primitive-billboard>
      <!-- end -->
      <!-- 弹窗 -->
      <vc-overlay-html :position="poiPopData.poiPopPosition" v-if="poiPopData.showPoiPop" :pixel-offset="{ x: -240, y: -350 }">
        <div class="map-poi-dialog">
          <div class="m-header"><div class="m-title">{{ poiPopData.title }}</div><div @click="closePoiPop" class="m-btn-close" /></div>
          <div class="m-content">
            <div class="">呵呵</div>
          </div>
        </div>
      </vc-overlay-html>
      <!-- end -->
      <!-- 卷帘对比 -->
      <cesium-map-split v-if="showMapSplit" :cesiumInstance="curCesiumInstance" />
      <!-- end -->
      <!-- 分屏对比 -->
      <cesium-map-double v-if="showMapDoubleCompare" />
      <!-- end -->
      <!-- 书签 -->
      <cesium-map-bookmark v-if="showMapBookmark" :cesiumInstance="curCesiumInstance" />
      <!-- end -->
      <!-- 视频融合 -->
      <!-- <vc-entity
        ref="entity"
        :position="videoEntity.position"
      >
        <vc-graphics-billboard
          :image="videoEntity.image"
          :show="showMapVideo"
          :distance-display-condition="{ near: 0, far: 10000 }"
        ></vc-graphics-billboard>
      </vc-entity> -->
      <!-- end -->
      <!-- 闪点 -->
      <!-- <vc-shine-point @ready="subReady" :position="shinePoint.position" color="red"></vc-shine-point> -->
      <!-- end -->
      <!-- 涟漪 -->
      <vc-ripple-circle-double
        v-if="showRipple"
        ref="circle"
        @ready="subReady"
        image-url="./images/redCircle.png"
        :position="shinePoint.position"
        :height="shinePoint.position.height"
        :maxRadius="1500"
        :interval="3000"
        :deviationRadius="20"
      ></vc-ripple-circle-double>
      <!-- end -->
      <!-- 圆形扫描、雷达扫描 255, 0, 0, 255; scan-circle-1; VcScanCircle-->
      <vc-scan-circle
        v-if="showScanCircle"
        @ready="subReady"
        :radius="1500"
        :interval="1500"
        :color="[232, 1, 8, 135]"
        :position="shinePoint.position"
      ></vc-scan-circle>
      <vc-scan-radar
        v-if="showScanRadar"
        @ready="subReady"
        :radius="1500"
        :interval="1500"
        :color="[2, 225, 1, 110]"
        :position="shinePoint.position"
      ></vc-scan-radar>
      <!-- end -->
    </vc-viewer>
    <!-- 视频融合 -->
    <video id="mapVideo" ref="mapVideo" v-if="showMapVideo" loop autoplay crossorigin controls style="display: none">
      <source
        src="https://cesium.com/public/SandcastleSampleData/big-buck-bunny_trailer.mp4"
        type="video/mp4" />
    </video>
    <!-- end -->
  </div>
</template>

<script>
import indexjs from './index.js'
export default {
  ...indexjs
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
