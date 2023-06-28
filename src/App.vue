<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // resizeTimer: ''
    }
  },
  // created() {
  //   this.setHtmlFontSize()
  // },
  // mounted() {
  //   this.listenWindowResize()
  // },
  // methods: {
  //   // 设置html px
  //   setHtmlFontSize() {
  //     const wWidth = 1920 // 按照标准1920设计图
  //     const whdef = 100 / wWidth // 表示1920的设计图,使用100PX的默认值
  //     const wW = document.documentElement.clientWidth // 窗口宽度
  //     const rem = wW * whdef // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
  //     document.documentElement.style.fontSize = rem + 'px'
  //     document.body.style.fontSize = '16px'
  //   },
  //   // 全局监听window发生变化
  //   listenWindowResize() {
  //     window.onresize = () => {
  //       if (this.resizeTimer) {
  //         window.clearTimeout(this.resizeTimer)
  //       }
  //       this.resizeTimer = window.setTimeout(() => {
  //         this.setHtmlFontSize()
  //       }, 500)
  //     }
  //   }
  // }
}
</script>

<style scope lang="scss"></style>
