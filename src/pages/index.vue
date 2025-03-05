<route lang="yaml">
style:
  navigationBarTitleText: "首页"
</route>

<script lang="ts" setup>
const userInfo = useUserStore().userInfo
if (userInfo.token && userInfo.isRegister) {
  toBusinessDashboard()
}
else {
  toBusinessLogin()
}

function toBusinessDashboard() {
  uni.reLaunch({ url: '/pages/tabs/home' })
}

function toBusinessLogin() {
  uni.navigateTo({ url: '/pages/login/index' })
}
</script>

<template>
  <view />
</template>
