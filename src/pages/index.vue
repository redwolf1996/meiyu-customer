<route lang="yaml">
style:
  navigationBarTitleText: "首页"
</route>

<script lang="ts" setup>
import { useCustomerStore } from '@/stores/modules/customer'

const customerStore = useCustomerStore()

if (customerStore.customerInfo?.token && customerStore.customerInfo?.phone && customerStore.customerInfo?.lastStoreId) {
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
