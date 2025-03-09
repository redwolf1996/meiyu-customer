<route lang="yaml">
style:
  navigationBarTitleText: 选择门店
</route>

<script lang="ts" setup>
import weixin from '@wtto00/jweixin-esm'
import { onMounted, ref } from 'vue'
import { formatWorkTime } from '@/utils'

const currentCity = ref<string>('青岛')
const storeList = ref<any[]>([])
const paging = ref<any>(null)

onLoad(async () => {
  initJssdk()
})

onMounted(() => {
  // 组件会自动调用 queryList
})

async function queryList(pageNo: number, pageSize: number) {
  try {
    const res = await request.get<any>('/customer/store-list-all', {
      params: {
        pageNo,
        pageSize,
      },
    })
    // 通过total判断是否有更多数据
    paging.value.completeByTotal(res.data.list, res.data.total)
  }
  catch {
    // 请求失败
    paging.value.complete(false)
  }
}

async function initJssdk() {
  const res = await request.get('/customer/jsapi-config', {
    url: window.location.origin + window.location.pathname + window.location.search,
  }) as any

  const configData: WX.ConfigOptions = {
    debug: false,
    appId: 'wx4523c84aefbd91d2',
    timestamp: res.data.timestamp.toString(),
    nonceStr: res.data.nonceStr,
    signature: res.data.signature,
    jsApiList: ['getLocation'], // WX.JsApi[]
    openTagList: [], // WX.OpenTag[]
  }
  weixin.config(configData)
  weixin.ready(() => {
    console.log('ready')
    getCurrentLocation()
  })
  weixin.error((err: any) => {
    console.log('error', err)
  })
}

function showCityPicker() {
  // 显示城市选择器
  uni.showToast({
    title: '城市选择功能开发中',
    icon: 'none',
  })
}

function getCurrentLocation() {
  // 获取当前位置并定位到当前城市
  wx.getLocation({
    type: 'wgs84',
    success: (res) => {
      console.log('res', res)
      // 根据经纬度获取城市信息
      reverseGeocode(res.longitude, res.latitude)
    },
    fail: () => {
      uni.showToast({
        title: '获取位置失败，请检查定位权限',
        icon: 'none',
      })
    },
  })
}

interface QQMapResult {
  status: number
  result: {
    address_component: {
      city: string
    }
  }
}

function jsonp(url: string, callbackName: string) {
  return new Promise<QQMapResult>((resolve, reject) => {
    const script = document.createElement('script')

    // 清理函数
    const cleanup = () => {
      delete (window as any)[callbackName]
      document.body.removeChild(script)
    }

    // 检查URL是否已经包含查询参数
    const separator = url.includes('?') ? '&' : '?'
    script.src = `${url}${separator}output=jsonp&callback=${callbackName}`

    // 错误处理
    script.onerror = () => {
      reject(new Error('JSONP 请求失败'))
      cleanup()
    }

    // 设置回调
    ;(window as any)[callbackName] = (data: QQMapResult) => {
      resolve(data)
      cleanup()
    }

    document.body.appendChild(script)
  })
}

async function reverseGeocode(longitude: number, latitude: number) {
  try {
    // 腾讯地图API密钥 - 请替换为你自己的密钥
    const key = '2QZBZ-7MPKU-745VI-GIAMT-HI5UK-6TBB5'
    const url = `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${key}`

    const data = await jsonp(url, `QQmap_${Date.now()}`)

    if (data.status === 0) {
      // 更新城市名称
      currentCity.value = data.result.address_component.city
    }
    else {
      uni.showToast({
        title: '获取城市信息失败',
        icon: 'none',
      })
    }
  }
  catch (error) {
    console.error('逆地理编码错误:', error)
    uni.showToast({
      title: '获取城市信息失败',
      icon: 'none',
    })
  }
}

function selectStore(store: any) {
  // 选择门店
  uni.showToast({
    title: `已选择${store.name}`,
    icon: 'none',
  })
}

function contactStore(store: any) {
  // 联系门店
  uni.makePhoneCall({
    phoneNumber: store.phone,
    fail: () => {
      uni.showToast({
        title: '拨打电话失败',
        icon: 'none',
      })
    },
  })
}
</script>

<template>
  <z-paging
    ref="paging"
    v-model="storeList"
    lower-threshold="100"
    auto-show-back-to-top
    :default-page-size="10"
    @query="queryList"
  >
    <template #top>
      <!-- 地址选择和搜索栏 -->
      <view class="search-container">
        <!-- <view class="location-selector">
          <text>{{ currentCity }}</text>
          <wd-icon name="arrow-down" size="14" />
        </view> -->
        <view class="search-box">
          <wd-icon name="search" size="18" />
          <input type="text" placeholder="搜索">
        </view>
      </view>
    </template>

    <!-- 门店列表 -->
    <view class="store-list">
      <view v-for="(store, index) in storeList" :key="index" class="store-item" @click="selectStore(store)">
        <image class="store-image" :src="store?.logo" mode="aspectFill" />
        <view class="store-info">
          <view class="store-name">
            {{ store?.storeName || '--' }}
          </view>
          <view class="store-address">
            <wd-icon name="location" size="14" />
            <text>{{ store?.address || '--' }}</text>
          </view>
          <view class="store-hours">
            <wd-icon name="time" size="14" />
            <text>{{ formatWorkTime(store?.workWeek, store?.workStime, store?.workEtime) }}</text>
          </view>
          <view class="contact-btn" @click.stop="contactStore(store)">
            <wd-icon name="phone" size="14" />
            <text>联系门店</text>
          </view>
        </view>
      </view>
    </view>

    <template #bottom>
      <view class="h50px" />
    </template>
  </z-paging>
</template>

<style>
.store-page {
  background-color: #f5f5f5;
  min-height: 100vh;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #fff;
  position: relative;
}

.back-icon {
  width: 24px;
}

.title {
  font-size: 18px;
  font-weight: 500;
  flex: 1;
  text-align: center;
}

.right-icons {
  display: flex;
  gap: 15px;
}

.circle-icon {
  font-weight: bold;
}

.search-container {
  display: flex;
  padding: 10px 15px;
  background-color: #fff;
  align-items: center;
}

.location-selector {
  display: flex;
  align-items: center;
  padding-right: 15px;
  font-size: 16px;
  color: #333;
}

.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 8px 15px;
}

.search-box input {
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
}

.store-list {
  padding: 10px 0;
}

.store-item {
  display: flex;
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.store-image {
  width: 100px;
  height: 100px;
  border-radius: 4px;
  margin-right: 15px;
}

.store-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.store-name {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
}

.store-address,
.store-hours {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.store-address text,
.store-hours text {
  margin-left: 5px;
}

.contact-btn {
  display: flex;
  align-items: center;
  color: #3a86ff;
  font-size: 14px;
  margin-top: 5px;
}

.contact-btn text {
  margin-left: 5px;
}
</style>
