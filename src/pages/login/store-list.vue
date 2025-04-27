<route lang="yaml">
style:
  navigationBarTitleText: 选择门店
</route>

<script lang="ts" setup>
import weixin from '@wtto00/jweixin-esm'
import { computed, onMounted, ref } from 'vue'
import { formatWorkTime } from '@/utils'
import { useCustomerStore } from '@/stores/modules/customer'
import { pinyinFirstLetterMap } from './data'
import qs from 'qs'

interface City {
  code: string
  name: string
}

const currentCity = ref<string>('')
const currentCityCode = ref<string>('')
const storeList = ref<any[]>([])
const allStoreList = ref<any[]>([]) // 存储所有的店铺数据
const paging = ref<any>(null)
const cityList = ref<City[]>([])
const showCityPicker = ref(false)
const citySearchKeyword = ref('')
const storeSearchKeyword = ref('') // 店铺搜索关键词
const isInitialized = ref(false) // 是否已初始化（已获取到城市信息）

// 获取汉字的拼音首字母
function getPinyinFirstLetter(char: string): string {
  // 尝试从映射表获取
  const firstLetter = pinyinFirstLetterMap[char]
  if (firstLetter) {
    return firstLetter
  }

  // 如果不在映射表中，判断是否是英文字母
  const code = char.charCodeAt(0)
  if (code >= 65 && code <= 90) { // A-Z
    return char
  }
  if (code >= 97 && code <= 122) { // a-z
    return char.toUpperCase()
  }

  // 如果不是英文字母，返回#
  return '#'
}

// 过滤后的门店列表
const filteredStoreList = computed(() => {
  if (!storeSearchKeyword.value)
    return storeList.value
  return storeList.value.filter(store =>
    store.storeName && store.storeName.toLowerCase().includes(storeSearchKeyword.value.toLowerCase()),
  )
})

// 过滤后的城市列表
const filteredCityList = computed(() => {
  if (!citySearchKeyword.value)
    return cityList.value
  return cityList.value.filter(city =>
    city.name.toLowerCase().includes(citySearchKeyword.value.toLowerCase()),
  )
})

// 根据首字母分组城市
const groupedCities = computed(() => {
  if (!cityList.value.length)
    return []

  // 如果存在搜索关键词，则不进行分组
  if (citySearchKeyword.value) {
    return [{ letter: '搜索结果', cities: filteredCityList.value }]
  }

  // 按首字母分组城市
  const groups: { [key: string]: City[] } = {}

  cityList.value.forEach((city) => {
    // 获取城市名称的第一个汉字的拼音首字母
    const firstChar = city.name.charAt(0)
    const firstLetter = getPinyinFirstLetter(firstChar)

    if (!groups[firstLetter]) {
      groups[firstLetter] = []
    }
    groups[firstLetter].push(city)
  })

  // 转换为数组并按字母排序
  return Object.keys(groups)
    .sort()
    .map(letter => ({
      letter,
      cities: groups[letter],
    }))
})

// 字母索引列表
const letterList = computed(() => {
  return groupedCities.value.map(group => group.letter)
})

onLoad(async () => {
  await initJssdk()
})

onMounted(async () => {
  // 初始化时，不会自动加载列表，等待城市信息获取后再加载
  if (paging.value) {
    // 禁用自动加载，等待城市信息获取后手动触发
    paging.value.autoLoad = false
  }

  // 获取城市列表
  try {
    const res = await request.get<City[]>('/customer/city')
    cityList.value = res.data
  }
  catch (error) {
    console.error('获取城市列表失败', error)
  }
})

async function queryList(pageNo: number, pageSize: number) {
  try {
    // 如果还没有初始化完成（没有获取到城市信息），则跳过加载
    if (!isInitialized.value && !currentCityCode.value) {
      paging.value.complete(false)
      return
    }

    const params: any = {
      pageNo,
      pageSize,
    }

    // 添加城市代码作为查询参数
    if (currentCityCode.value) {
      params.city = currentCityCode.value // 使用city参数传递城市代码
    }

    const res = await request.get<any>(`/customer/store-list-all?${qs.stringify(params)}`)

    // 存储获取到的店铺列表
    allStoreList.value = res.data.list

    // 通过total判断是否有更多数据
    paging.value.completeByTotal(res.data.list, res.data.total)
  }
  catch {
    // 请求失败
    paging.value.complete(false)
  }
}

// 清除搜索关键词
function clearStoreSearch() {
  storeSearchKeyword.value = ''
}

// 选择城市
function selectCity(city: City) {
  // 更新当前选中的城市信息
  currentCity.value = city.name
  currentCityCode.value = city.code

  // 关闭城市选择器并清空搜索关键词
  showCityPicker.value = false
  citySearchKeyword.value = '' // 清空城市搜索关键词
  storeSearchKeyword.value = '' // 清空门店搜索关键词

  // 刷新门店列表，根据选中的城市code重新请求数据
  // refreshStoreList会调用paging.reload()，进而触发queryList函数
  // queryList函数会在请求参数中添加city=城市代码
  refreshStoreList()
}

// 刷新门店列表
function refreshStoreList() {
  // 重置分页并重新加载数据
  if (paging.value) {
    // 重置到第一页，并清空原有数据
    paging.value.reload()

    // 如果需要，还可以添加loading提示
    uni.showLoading({
      title: '加载中...',
      mask: true,
    })

    // 加载完成后隐藏loading
    setTimeout(() => {
      uni.hideLoading()
    }, 500)
  }
}

// 打开城市选择器
function openCityPicker() {
  showCityPicker.value = true
}

// 滚动到指定字母的城市组
function scrollToLetter(letter: string) {
  // 获取对应字母的元素
  const el = document.getElementById(`city-group-${letter}`)
  if (el) {
    // 滚动到该元素位置
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

async function initJssdk() {
  try {
    // 显示加载中提示
    uni.showLoading({
      title: '定位中...',
      mask: true,
    })

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
      getCurrentLocation()
    })
    weixin.error((err: any) => {
      console.error('error', err)
      // 初始化失败也标记为已初始化，使用默认城市加载数据
      completeInitialization()
    })
  }
  catch (error) {
    console.error('初始化JSSDK失败', error)
    // 初始化失败也标记为已初始化，使用默认城市加载数据
    completeInitialization()
  }
}

function getCurrentLocation() {
  // 获取当前位置并定位到当前城市
  wx.getLocation({
    type: 'wgs84',
    success: (res) => {
      // 根据经纬度获取城市信息
      reverseGeocode(res.longitude, res.latitude)
    },
    fail: () => {
      uni.showToast({
        title: '获取位置失败，请检查定位权限',
        icon: 'none',
      })
      // 获取位置失败时也要标记为已初始化，使用默认城市加载数据
      completeInitialization()
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
      currentCityCode.value = cityList.value.find(city => city.name === currentCity.value)?.code || ''

      // 完成初始化并加载门店列表
      completeInitialization()
    }
    else {
      uni.showToast({
        title: '获取城市信息失败',
        icon: 'none',
      })
      // 即使获取城市信息失败，也要完成初始化并加载默认数据
      completeInitialization()
    }
  }
  catch (error) {
    console.error('逆地理编码错误:', error)
    uni.showToast({
      title: '获取城市信息失败',
      icon: 'none',
    })
    // 出错时也要完成初始化并加载默认数据
    completeInitialization()
  }
}

// 初始化完成，开始加载门店列表
function completeInitialization() {
  // 关闭加载提示
  uni.hideLoading()

  // 标记为已初始化
  isInitialized.value = true

  // 如果已经获取到了分页组件引用，手动触发加载
  if (paging.value) {
    // 重新启用自动加载
    paging.value.autoLoad = true
    // 手动触发加载
    paging.value.reload()
  }
}

async function selectStore(store: any) {
  customerStoreId.value = store.id
  // 上报当前门店id
  await request.post(`/customer/current-store-id/${store.id}`)
  const res = await request.get('/customer/info')
  const customerStore = useCustomerStore()
  customerStore.setCustomerInfo(res.data)
  uni.reLaunch({ url: '/pages/tabs/tab-home' })
}

function contactStore(store: any) {
  // 联系门店
  // uni.makePhoneCall({
  //   phoneNumber: store.phone,
  //   fail: () => {
  //     uni.showToast({
  //       title: '拨打电话失败',
  //       icon: 'none',
  //     })
  //   },
  // })
  window.location.href = `tel:${store.phone}`
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
        <view class="location-selector" @click="openCityPicker">
          <text>{{ currentCity || '选择城市' }}</text>
          <wd-icon name="arrow-down" size="14" />
        </view>
        <view class="search-box">
          <wd-icon name="search" size="18" />
          <input
            v-model="storeSearchKeyword"
            type="text"
            placeholder="搜索门店"
            class="search-input"
          >
          <wd-icon
            v-if="storeSearchKeyword"
            name="close-fill"
            size="18"
            class="clear-btn"
            @click="clearStoreSearch"
          />
        </view>
      </view>
    </template>

    <!-- 门店列表 -->
    <view class="store-list">
      <view v-if="filteredStoreList.length === 0" class="no-store-tip">
        {{ storeSearchKeyword ? '未找到相关门店' : '该城市暂无门店，请选择其他城市' }}
      </view>
      <view
        v-for="(store, index) in filteredStoreList"
        :key="index"
        class="store-item"
        @click="selectStore(store)"
      >
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

  <!-- 城市选择弹窗 -->
  <wd-popup v-model="showCityPicker" position="bottom" custom-style="height: 60vh;">
    <view class="city-picker-header">
      <text class="city-picker-title">
        选择城市
      </text>
    </view>
    <view class="city-search">
      <view class="city-search-box">
        <wd-icon name="search" size="18" />
        <input
          v-model="citySearchKeyword"
          type="text"
          placeholder="搜索城市"
          class="city-search-input"
        >
        <wd-icon
          v-if="citySearchKeyword"
          name="close-fill"
          size="18"
          class="clear-btn"
          @click="citySearchKeyword = ''"
        />
      </view>
    </view>
    <view class="city-content">
      <view class="city-list">
        <view v-if="filteredCityList.length === 0 && citySearchKeyword" class="no-result">
          没有找到匹配的城市
        </view>
        <template v-for="(group, groupIndex) in groupedCities" :key="groupIndex">
          <view :id="`city-group-${group.letter}`" class="city-group">
            <view class="city-group-title">
              {{ group.letter }}
            </view>
            <view
              v-for="(city, cityIndex) in group.cities"
              :key="`${groupIndex}-${cityIndex}`"
              class="city-item"
              @click="selectCity(city)"
            >
              {{ city.name }}
            </view>
          </view>
        </template>
      </view>
      <!-- 字母索引 -->
      <view v-if="!citySearchKeyword && letterList.length > 1" class="letter-index">
        <view
          v-for="(letter, index) in letterList"
          :key="index"
          class="letter-item"
          @click="scrollToLetter(letter)"
        >
          {{ letter }}
        </view>
      </view>
    </view>
  </wd-popup>
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

.city-picker-header {
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.city-picker-title {
  font-size: 16px;
  font-weight: 500;
}

.city-content {
  position: relative;
  height: calc(60vh - 120px);
}

.city-list {
  height: 100%;
  padding: 10px 15px;
  overflow-y: auto;
}

.city-group {
  margin-bottom: 15px;
}

.city-group-title {
  padding: 5px 0;
  color: #ff5a5f;
  font-size: 14px;
  font-weight: 500;
}

.city-item {
  padding: 12px 0;
  font-size: 14px;
  border-bottom: 1px solid #f5f5f5;
}

.letter-index {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5px;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1;
}

.letter-item {
  font-size: 12px;
  padding: 3px;
  color: #ff5a5f;
}

.city-search {
  padding: 10px 15px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}

.city-search-box {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 8px 15px;
  position: relative;
}

.city-search-input {
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
}

.clear-btn {
  color: #999;
}

.no-result {
  padding: 20px 0;
  text-align: center;
  color: #999;
  font-size: 14px;
}

.no-store-tip {
  padding: 30px 0;
  text-align: center;
  color: #999;
  font-size: 14px;
}

.search-input {
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
}
</style>
