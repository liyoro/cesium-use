<!--
 * @Author: liyoro
 * @Date: 2023-04-14 16:34:38
 * @LastEditors: liyoro
 * @LastEditTime: 2023-06-24 23:51:49
 * @Description: 大屏头部
-->
<template>
  <div class="bs-header">
    <div class="manage" @click="homeClick">
      进入管理系统
    </div>
  </div>
</template>

<script>
export default {
  name: 'BsHeader',
  data() {
    return {
    }
  },
  mounted() {},
  created() {
  },
  methods: {
    homeClick() {
      this.$router.push({ path: 'home' })
    }
  }
}
</script>

<style scoped lang="scss">
.bs-header {
  width: 1920px;
  height: 58px;
  // background-image: url("~@/assets/images/header.png");
  // background-size: 100% 100%;
  background-color: #46abfe;
  .manage {
    float: left;
    padding-left: 24px;
    line-height: 58px;
    font-size: 16px;
    font-weight: 400;
    color: #AEF3FF;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
