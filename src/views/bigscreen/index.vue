<template>
  <div class="bs-container">
    <div class="bigscreen">
      <bs-header />
      <div class="content-view">
        <!-- <left-view :data="data" />
        <right-view :data="data" /> -->
        <center-view :data="data" />
      </div>
    </div>
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
