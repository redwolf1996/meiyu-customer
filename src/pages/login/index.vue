<route lang="yaml">
style:
  navigationBarTitleText: 登录-客户端
</route>

<script lang="ts" setup>
import { useCustomerStore } from '@/stores/modules/customer'

const checked = ref(false)
function select(e: UniHelper.CheckboxGroupOnChangeEvent) {
  checked.value = !!e.detail.value.includes('cb')
}
const customerStore = useCustomerStore()
const token = computed(() => customerStore.customerInfo?.token)
const baseHost = import.meta.env.VITE_HOST

onLoad(async () => {
  if (token.value) {
    customerStoreId.value = customerStore.customerInfo.lastStoreId
    return uni.reLaunch({ url: '/pages/tabs/tab-home' })
  }

  const code = new URLSearchParams(window.location.search).get('code')
  if (!code) {
    const appid = 'wx4523c84aefbd91d2'
    const redirect_uri = encodeURIComponent(`${baseHost}/#/pages/login/index`)
    location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=MYmy001#wechat_redirect`
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

// 1:服务协议 2:隐私政策
function toProtocol(type: 1 | 2) {
  uni.navigateTo({ url: `/pagesA/protocol?type=${type}` })
}
</script>

<template>
  <view h-screen w-screen tc pr>
    <view pt-100rpx font-size-36rpx font-bold>
      欢迎来到美预预约
    </view>
    <view mt-80rpx>
      <wd-img
        :width="72"
        :height="72"
        :src="`${IMG_BASE}/logo.png`"
      />
    </view>
    <view mt-80rpx>
      走近千家万户，共享轻松生活
    </view>
    <view mx-60rpx mt-112rpx color-white>
      <wd-button :disabled="!checked" size="large" :block="true">
        <view flex flex-cc>
          <text i-tdesign-logo-wechat fs-36 />
          <text>&nbsp;微信一键登录</text>
        </view>
      </wd-button>
    </view>
    <view bottom-160rpx w-full color-gray-6 pf>
      <view flex flex-cc>
        <checkbox-group @change="select">
          <checkbox
            value="cb"
            :checked="checked"
          />
        </checkbox-group>
        <text>登录代表同意</text>
        <text theme-color @click="toProtocol(1)">
          《用户协议》
        </text>
        <text>及</text>
        <text theme-color @click="toProtocol(2)">
          《隐私政策》
        </text>
      </view>
      <view pt-10rpx>
        登录前请阅读
      </view>
    </view>
  </view>
</template>
