<route lang="yaml">
style:
  navigationBarTitleText: 登录
</route>

<script setup lang="ts">
import { useCustomerStore } from '@/stores/modules/customer'
import { computed, ref } from 'vue'
import request from '@/utils/request'

const customerStore = useCustomerStore()
const token = computed(() => customerStore.customerInfo?.token)
const baseUrl = import.meta.env.VITE_BASE_URL

onLoad(async () => {
  // 登录过后本地有token的情况
  if (token.value) {
    if (!customerStore.customerInfo?.lastStoreId) {
      return uni.reLaunch({ url: '/pages/login/store-list' })
    }
    else {
      customerStoreId.value = customerStore.customerInfo.lastStoreId
      return uni.reLaunch({ url: '/pages/tabs/tab-home' })
    }
  }

  // 本地没有token从未登录的情况
  const code = new URLSearchParams(window.location.search).get('code')
  if (!code) {
    const redirectUrl = baseUrl.startsWith('http')
      ? `${baseUrl}/customer/wxoauth`
      : `https://${baseUrl}/customer/wxoauth`

    window.location.href = redirectUrl
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
