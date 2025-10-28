<route lang="yaml">
style:
  navigationBarTitleText: "首页"
</route>

<script lang="ts" setup>
import { useCustomerStore } from '@/stores/modules/customer'

const customerStore = useCustomerStore()

if (customerStore.customerInfo?.token && customerStore.customerInfo?.phone && customerStore.customerInfo?.lastStoreId) {
  // 用户已登录且信息完整，清除可能存在的旧的重定向路径
  customerStore.clearRedirectPath()
  toHome()
}
else {
  toLogin()
}

function toHome() {
  uni.reLaunch({ url: '/pages/tabs/tab-home' })
}

function toLogin() {
  uni.reLaunch({ url: '/pages/login/index' })
}
</script>

<template>
  <view />
</template>
