<route lang="yaml">
style:
  navigationBarTitleText: 打开小程序
</route>

<script lang="ts" setup>

</script>

<template>
  <view class="minapp">
    <view h100px />
    <view>长按识别小程序码跳转到"美预"小程序</view>
    <view h20px />
    <wd-img
      width="80vw"
      height="40vh"
      mode="aspectFit"
      :src="`${IMG_BASE}/minapp.jpg`"
    />
  </view>
</template>

<style lang="scss" scoped>
.minapp {
  height: 100vh;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  view {
    text-align: center;
    font-size: 14px;
    color: #999;
  }
}
</style>
