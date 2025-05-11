<route lang="yaml">
style:
  navigationBarTitleText: 选择服务
</route>

<script lang="ts" setup>
import type { AllItems, CatsItemsTree, ServiceList } from './types2'
import { flatten } from 'lodash-es'
import MyTabBar from './MyTabBar.vue'
import { isNumber } from '@/utils'

const active = ref<number>(0)
const scrollTop = ref<number>(0)
const categories = ref<CatsItemsTree<ServiceList>[]>([])
const tmpCheckedServs = ref<ServiceList[]>([])
const checkedCount = computed(() => {
  return tmpCheckedServs.value.length
})

onShow(async () => {
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
})

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
  // 获取所有分类下的服务项
  const allServices = categories.value
    .filter(v => v.items.length > 0 && v.id !== 0)
    .map(v1 => toRaw(v1.items))
    .flat()

  // 将所有服务项的checked设置为false
  allServices.forEach((service) => {
    service.checked = false
  })

  // 找到并选中当前点击的服务项
  const currentService = allServices.find(service => service.id === id)
  if (currentService) {
    currentService.checked = true
  }

  // 更新已选中的服务列表
  tmpCheckedServs.value = allServices.filter(v => v.checked)
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
</script>

<template>
  <!-- <wd-navbar
    placeholder pr
    custom-class="custom-nav"
    :safeAreaInsetTop="true"
    :fixed="true"
  >
    <template #title>
      <text>选择服务</text>
    </template>
  </wd-navbar> -->
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
              <wd-checkbox v-model="itm.checked" size="large" @change="changeCheck(itm.id)" />
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
