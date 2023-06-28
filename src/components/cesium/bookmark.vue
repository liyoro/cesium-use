<!--
 * @Author: liyoro
 * @Date: 2023-06-24 17:06:42
 * @LastEditors: liyoro
 * @LastEditTime: 2023-06-25 23:20:33
 * @Description: cesium书签
 * 'cesium-map-bookmark': () => import('@/components/cesium/bookmark.vue'),
-->
<template>
  <div class="cesium-map-bookmark">
    <div class="t-view">
      <el-input v-model="bname" placeholder="请输入书签名称" clearable></el-input>
      <el-button @click="addClick" type="primary">添加</el-button>
    </div>
    <div class="c-view">
      <div v-for="(item,index) in list" :key="item.name" class="c-item">
        <img @click="flyToPoi(item.center)" :src="item.img" />
        <div class="c-title overtext">{{ item.name }}</div>
        <i @click="delClick(index)" class="el-icon-delete"></i>
      </div>
    </div>
  </div>
</template>

<script>
// import Canvas2Image from '@/utils/canvas2image'

export default {
  name: 'cesium-map-bookmark',
  components: {},
  props: {
    cesiumInstance: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      bname: '',
      list: []
    }
  },
  computed: {},
  watch: {},
  beforeDestroy() {},
  mounted() {
    this.getLocalStorage()
    // this.list = [
    //   { id: 1, name: '1', center: {}, img: '' },
    //   { id: 2, name: '2', center: {}, img: '' },
    //   { id: 3, name: '3', center: {}, img: '' },
    //   { id: 4, name: '4', center: {}, img: '' }
    // ]
  },
  created() {},
  updated() {},
  methods: {
    getLocalStorage() {
      const data = JSON.parse(localStorage.getItem('bookmark'))
      if (data && data.length > 0) {
        // console.log('历史数据', data)
        const tempList = []
        for (let i = 0; i < data.length; i++) {
          const item = data[i]
          // 删除未匹配项
          if (item.img !== '') {
            tempList.push(item)
          }
        }
        this.list = tempList
      }
    },
    // 第一种压缩图片方法（图片base64,图片类型,压缩比例,回调函数）
    // 图片类型是指 image/png、image/jpeg、image/webp(仅Chrome支持)
    // 该方法对以上三种图片类型都适用 压缩结果的图片base64与原类型相同
    // 压缩结果存在误差 压缩比例只能作为范围参考
    // this.compressImg(temp64, 'image/png', 0.1, res => {
    // })
    compressImg(base64, type, rate, callback) {
      // 声明一个Image对象
      const _img = new Image()
      // 将图片的地址赋予这个Image
      _img.src = base64
      // 在图片加载完成后
      _img.onload = function () {
        // 创建canvas标签
        const _canvas = document.createElement('canvas')
        // 根据压缩比例设置canvas画布的宽高属性
        // this 指的是当前Image对象
        const w = this.width * rate
        const h = this.height * rate
        _canvas.setAttribute('width', w)
        _canvas.setAttribute('height', h)
        // 将图片渲染到canvas画布上 并设置渲染图片的宽高与画布的宽高一致
        _canvas.getContext('2d').drawImage(this, 0, 0, w, h)
        // 将canvas画布转换成对应类型的base64
        const base64 = _canvas.toDataURL(type)
        // 将结果通过回调函数传递给方法的调用者
        callback(base64)
      }
    },
    compressBase64(base64) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        const w = 480
        // 第一个参数就是原来的字符串，第二个是宽度
        const newImage = new Image()
        let quality = 0.6 // 压缩系数0-1之间
        newImage.src = base64
        newImage.setAttribute('crossOrigin', 'Anonymous') // url为外域时需要
        let imgWidth, imgHeight
        newImage.onload = function () {
          imgWidth = this.width
          imgHeight = this.height
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          if (Math.max(imgWidth, imgHeight) > w) {
            if (imgWidth > imgHeight) {
              canvas.width = w
              canvas.height = (w * imgHeight) / imgWidth
            } else {
              canvas.height = w
              canvas.width = (w * imgWidth) / imgHeight
            }
          } else {
            canvas.width = imgWidth
            canvas.height = imgHeight
            quality = 0.6
          }
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(this, 0, 0, canvas.width, canvas.height)
          let base64 = canvas.toDataURL('image/jpeg', quality) // 压缩语句
          // 如想确保图片压缩到自己想要的尺寸,如要求在5-20kb之间，请加以下语句，quality初始值根据情况自定
          while (base64.length / 1024 > 20) {
            quality -= 0.01
            base64 = canvas.toDataURL('image/jpeg', quality)
          }
          // 防止最后一次压缩低于最低尺寸，只要quality递减合理，无需考虑
          while (base64.length / 1024 < 5) {
            quality += 0.001
            base64 = canvas.toDataURL('image/jpeg', quality)
          }
          resolve(base64) // 必须通过回调函数返回，否则无法及时拿到该值
        }
      })
    },
    addClick() {
      const { Cesium, viewer } = this.cesiumInstance
      const temp = this.getcameraPosInfo(Cesium, viewer)
      // console.log(temp)
      const canvas = viewer.scene.canvas
      const temp64 = canvas.toDataURL('image/jpeg')
      this.compressBase64(temp64).then(res => {
        // console.log(res)
        if (!this.bname) {
          return
        }

        // 不能使用相同名称
        if (this.list.some(item => item.name === this.bname)) {
          this.$message({
            message: '已存在，请更换名称!',
            type: 'warning'
          })
          return
        }
        this.list.push({ name: this.bname, center: temp, img: res })
        localStorage.setItem('bookmark', JSON.stringify(this.list))
      })
    },
    delClick(index) {
      this.list.splice(index, 1)
      localStorage.setItem('bookmark', JSON.stringify(this.list))
    },
    // 获取相机位置，姿态等
    getcameraPosInfo(Cesium, viewer) {
      // 获取 相机姿态信息
      const head = viewer.scene.camera.heading
      const pitch = viewer.scene.camera.pitch
      const roll = viewer.scene.camera.roll
      const info = { head: head, pitch: pitch, roll: roll }
      // 获取位置 wgs84的地心坐标系，x,y坐标值以弧度来表示
      const position = viewer.scene.camera.positionCartographic // with longitude and latitude expressed in radians and height in meters.
      // 以下方式也可以获取相机位置只是返回的坐标系不一样
      // var position = viewer.scene.camera.position //cartesian3 空间直角坐标系
      // var ellipsoid = scene.globe.ellipsoid;
      // var position =ellipsoid.cartesianToCartographic(viewer.scene.camera.position)//
      // 弧度转经纬度
      const longitude = Cesium.Math.toDegrees(position.longitude).toFixed(6)
      const latitude = Cesium.Math.toDegrees(position.latitude).toFixed(6)
      const height = position.height
      return { lng: longitude, lat: latitude, h: height, mat: info }
    },
    flyToPoi(position) {
      console.log(position)
      const { Cesium, viewer } = this.cesiumInstance

      viewer?.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(Number(position.lng), Number(position.lat), Number(position.h)),
        orientation: {
          heading: position.mat.head, // east, default value is 0.0 (north) //东西南北朝向
          pitch: position.mat.pitch, // default value (looking down)  //俯视仰视视觉
          roll: position.mat.roll // default value
        },
        duration: 2 // 3秒到达战场
      })
    //   viewer.camera.flyTo({
    //     destination: Cesium.Cartesian3.fromDegrees(110.286109, 21.609988, 3500.0),
    //     orientation: {
    //       heading: Cesium.Math.toRadians(0), // east, default value is 0.0 (north) //东西南北朝向
    //       pitch: Cesium.Math.toRadians(-90), // default value (looking down)  //俯视仰视视觉
    //       roll: 0.0 // default value
    //     },
    //     duration: 3 // 3秒到达战场
    //   })
    }
  }
}
</script>

<style lang="scss" scoped>
.cesium-map-bookmark {
  position: absolute;
  width: 282px;
  height: 750px;
  padding: 16px;
  right: 20px;
  top: 20px;
  z-index: 998;
  box-sizing: border-box;
  border-bottom: 1px solid #008aff70;
  border-left: 1px solid #008aff70;
  border-right: 1px solid #008aff70;
  box-shadow: 0 4px 15px 1px #02213bb3;
  border-radius: 0;
  background-size: 1px 10px, 10px 1px, 1px 10px, 10px 1px;
  background-color: rgba(23, 49, 71, 0.8);
  .t-view {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-input {
      width: 180px;
    }
  }
  .c-view {
    width: 100%;
    height: 680px;
    border: 1px solid #ffffff;
    border-radius: 2px;
    margin-top: 10px;
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: scroll;
    .c-item {
      position: relative;
      width: 228px;
      height: 190px;
      margin-top: 12px;
      border: 1px solid #ffffff;
      img {
        width: 100%;
        height: 155px;
        object-fit: cover;
        cursor: pointer;
      }
      .c-title {
        // width: 100%;
        height: 32px;
        line-height: 32px;
        text-align: center;
        color: #ffffff;
        font-size: 20px;
        position: absolute;
        left: 0;
        right: 48px;
        bottom: 0;
        padding-left: 20px;
      }
      .el-icon-delete {
        font-size: 20px;
        color: #ffffff;
        float: right;
        padding-right: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
