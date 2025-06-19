<route lang="yaml">
style:
  navigationBarTitleText: 选择服务
  navigationStyle: custom
</route>

<script lang="ts" setup>
import type { AllItems, CatsItemsTree, ServiceList, StoreListJoin } from './types2'
import { flatten } from 'lodash-es'
import MyTabBar from './MyTabBar.vue'
import { isNumber } from '@/utils'
import { useCustomerStore } from '@/stores/modules/customer'

const active = ref<number>(0)
const scrollTop = ref<number>(0)
const categories = ref<CatsItemsTree<ServiceList>[]>([])
const tmpCheckedServs = ref<ServiceList[]>([])
const checkedCount = computed(() => {
  return tmpCheckedServs.value.length
})
const customerStore = useCustomerStore()
const storeListJoin = ref<StoreListJoin[]>([])

const storeOptions = computed(() => {
  if (!storeListJoin.value?.length) {
    return []
  }
  return storeListJoin.value.map(v => ({
    label: v.storeName,
    value: v.id,
  }))
})

const selectedStoreId = ref<number>(customerStore.customerInfo.lastStoreId)
const selectedStoreName = ref<string>(customerStore.customerInfo.lastStoreName)

async function getStoreListJoin() {
  const res = await request.get<ListRes<StoreListJoin>>('/customer/store-list-join')
  storeListJoin.value = res.data.list
}

onShow(async () => {
  getStoreListJoin()
  getPageInfo()
})

async function getPageInfo() {
  const res = await request.get<AllItems>('/customer/store-goods-all')
  const serviceCats = res.data.serviceCategory!
  const services = res.data.serviceList

  const checkedServIds = checkedServs.value?.map(v1 => v1.id)

  categories.value = serviceCats.map((v) => {
    return {
      id: v.id,
      label: v.name,
      items: services.filter(v1 => v.id === v1.categoryId).map((v2) => {
        return {
          ...v2,
          goodsCount: checkedServIds.includes(v2.id)
            ? checkedServs.value?.find(v => v.id === v2.id)?.goodsCount
            : 1,
          checked: checkedServIds.includes(v2.id),
        }
      }),
    }
  })

  changeCheck(checkedServIds?.[0]) // 初始化tmpCheckedServs
}

onMounted(() => {
  // 去掉uniapp左上角返回箭头
  const a = document.getElementsByClassName('uni-page-head-hd')[0]
  if (a) {
    (a as any).style.display = 'none'
  }
})

function handleChange({ value }) {
  active.value = value
  scrollTop.value = -1
  nextTick(() => {
    scrollTop.value = 0
  })
}

function changeCheck(id: number) {
  // 遍历所有分类，更新每个项目的checked属性
  categories.value.forEach((category) => {
    category.items.forEach((service) => {
      // 将所有服务项的checked设置为false
      service.checked = false

      // 找到并选中当前点击的服务项
      if (service.id === id) {
        service.checked = true
      }
    })
  })

  // 更新已选中的服务列表
  tmpCheckedServs.value = flatten(
    categories.value.map(category => category.items.filter(service => service.checked)),
  )
}

function confirm() {
  if (checkedCount.value === 0) {
    uni.showToast({
      title: '请选择服务',
      icon: 'none',
    })
    return
  }
  checkedServs.value = tmpCheckedServs.value.map((v) => {
    return {
      ...v,
      prodType: 2,
    }
  })
  bookStime.value = ''
  uni.navigateTo({
    url: '/pages/servs/add',
  })
}

async function handleStoreChange() {
  const id = selectedStoreId.value
  customerStoreId.value = id
  // 更新显示的门店名称
  const selectedStore = storeListJoin.value.find(store => store.id === id)
  if (selectedStore) {
    selectedStoreName.value = selectedStore.storeName
  }
  await request.post(`/customer/current-store-id/${id}`) // 上报当前门店id
  getPageInfo()
}
</script>

<template>
  <wd-navbar
    placeholder pr
    custom-class="custom-nav"
    :safeAreaInsetTop="true"
    :fixed="true"
  >
    <template #left>
      <wd-drop-menu custom-class="store-drop-menu">
        <wd-drop-menu-item v-model="selectedStoreId" :options="storeOptions" @change="handleStoreChange">
          <view flex flex-ac gap6px>
            <view class="f16 fb store-list">
              {{ selectedStoreName }}
            </view>
            <wd-icon name="fill-arrow-down" size="22px" />
          </view>
        </wd-drop-menu-item>
      </wd-drop-menu>
    </template>
  </wd-navbar>

  <view class="wrapper">
    <wd-sidebar v-model="active" @change="handleChange">
      <wd-sidebar-item
        v-for="(item, index) in categories"
        :key="index"
        :value="index"
        :label="item.label"
      />
    </wd-sidebar>
    <view class="content" :style="`transform: translateY(-${active * 100}%)`">
      <scroll-view
        v-for="(item, index) in categories"
        :key="`cat-${index}`"
        class="category"
        scroll-y
        scroll-with-animation
        :show-scrollbar="true"
        :scroll-top="scrollTop"
        :throttle="false"
      >
        <view p12px>
          <view v-for="(itm, idx) in item.items" :key="`itm-${idx}`" flex flex-ac flex-bt pb14px mb14px style="border-bottom: 1px solid #EBEEF1">
            <view flex gap12px>
              <wd-img
                :width="72"
                :height="72"
                mode="aspectFill"
                :src="itm.coverImg"
              />
              <view>
                <view f14>
                  {{ itm.name }}
                </view>
                <view f12 c-#FF1919 mt6px>
                  ￥{{ itm.price2 ?? itm.price }}
                </view>
                <view v-if="isNumber(itm.price2)" f10 c-#D4D4D4 mt6px>
                  <text line-through>
                    ￥{{ itm.price }}
                  </text>
                </view>
              </view>
            </view>
            <view flex flex-cc>
              <wd-checkbox
                :model-value="itm.checked"
                size="large"
                @change="changeCheck(itm.id)"
              />
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>

  <view class="footer">
    <view>
      <view>已选择 {{ checkedCount }} 项</view>
    </view>
    <view w120px>
      <wd-button size="large" custom-class="theme-bg" block @click="confirm()">
        <view flex flex-cc>
          <text>选好了</text>
        </view>
      </wd-button>
    </view>
  </view>

  <view h100 />

  <MyTabBar :tab-index="0" />
</template>

<style>
page {
  height: 100vh;
  background: #fff;
  overflow-y: hidden;
}
.uni-page-head-hd {
  display: none !important;
}
</style>

<style lang='scss' scoped>
:deep(.wd-drop-menu__item-title) {
  transform: translateX(-20px) !important;
}
:deep(.store-drop-menu) {
  padding: 0 !important;
  font-weight: bold !important;
}
:deep(.wd-navbar__content) {
  background-color: #fff !important;
}
:deep(.wd-drop-menu) {
  height: auto;
  line-height: normal;
}
.wrapper {
  display: flex;
  height: calc(100vh - 90px);
  overflow: hidden;
}
.content {
  flex: 1;
  background: #fff;
  transition: transform 0.3s ease;
  height: 100%;
}
.category {
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  position: fixed;
  padding: 0 20px;
  width: 100%;
  bottom: 72px;
  background-color: #fff;
}
.this-tab {
  padding: 0 100rpx;
}
</style>
