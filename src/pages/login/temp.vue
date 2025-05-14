<route lang="yaml">
style:
  navigationBarTitleText: 登录
</route>

<script setup lang="ts">
import { useCustomerStore } from '@/stores/modules/customer'

const customerStore = useCustomerStore()
const token = computed(() => customerStore.customerInfo?.token)
const baseHost = import.meta.env.VITE_HOST

onLoad(async () => {
  if (token.value) {
    if (!customerStore.customerInfo?.lastStoreId) {
      uni.reLaunch({ url: '/pages/login/store-list' })
    }
    else {
      customerStoreId.value = customerStore.customerInfo.lastStoreId
      return uni.reLaunch({ url: '/pages/tabs/tab-home' })
    }
  }

  const code = new URLSearchParams(window.location.search).get('code')
  if (!code) {
    location.href = `${baseHost}/kivi-beauty/customer/wxoauth`
  }
  else {
    const res = await request.post<any>('/customer/wx-login', { code })
    customerStore.setCustomerInfo(res.data)

    if (!res.data?.phone) {
      uni.reLaunch({ url: '/pages/login/info' })
    }
    else {
      if (!res.data?.lastStoreId) {
        uni.reLaunch({ url: '/pages/login/store-list' })
      }
      else {
        uni.reLaunch({ url: '/pages/tabs/tab-home' })
      }
    }
  }
})
</script>

<template>
  <view />
</template>
