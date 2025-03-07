<route lang="yaml">
style:
  navigationBarTitleText: 登录-客户端
</route>

<script lang="ts" setup>
import { useCustomerStore } from '@/stores/modules/customer'

const checked = ref(false)
const code = ref('')
function select(e: UniHelper.CheckboxGroupOnChangeEvent) {
  checked.value = !!e.detail.value.includes('cb')
}
const customerStore = useCustomerStore()
const token = computed(() => customerStore.customerInfo?.token)

function login(p: { code: string }) {
  return request.post<{ token: string, isRegister: 0 | 1 }>('/business/wx-login', p)
}

onLoad(async () => {
  if (token.value)
    return uni.reLaunch({ url: '/pages/tabs/tab-home' })

  const code = new URLSearchParams(window.location.search).get('code')
  if (!code) {
    const appid = 'wx4523c84aefbd91d2'
    const redirect_uri = encodeURIComponent('http://m.meiyux.com/#/pages/login/index')
    location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=MYmy001#wechat_redirect`
  }
  else {
    const res = await request.post('/customer/wx-login', { code })
    customerStore.setCustomerInfo(res.data)
    uni.reLaunch({ url: '/pages/tabs/tab-home' })
  }
})

function wxlogin() {
  uni.login({
    provider: 'weixin',
    async success(res) {
      code.value = res.code
      if (res.code) {
        const { token, isRegister } = (await login({ code: res.code })).data
        useUserStore().setUserInfo({ token, isRegister })
        if (isRegister) {
          // await setUserBaseInfo()
          uni.reLaunch({ url: '/pages/tabs/tab-business-dashboard' })
        }
      }
      else {
        uni.showToast({
          title: '登录失败',
          icon: 'error',
          mask: true,
        })
      }
    },
  })
}

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
      <wd-button :disabled="!checked" size="large" :block="true" @click="wxlogin">
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
