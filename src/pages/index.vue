<route lang="yaml">
style:
  navigationBarTitleText: "首页"
</route>

<script lang="ts" setup>
const userInfo = useUserStore().userInfo
if (userInfo.token && userInfo.isRegister) {
  toDashboard()
}
else {
  toLogin()
}

function toDashboard() {
  uni.reLaunch({ url: '/pages/tabs/tab-home' })
}

function toLogin() {
  uni.navigateTo({ url: '/pages/login/index' })
}
</script>

<template>
  <view />
</template>
