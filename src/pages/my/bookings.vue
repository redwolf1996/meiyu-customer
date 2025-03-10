<route lang="yaml">
style:
  navigationBarTitleText: 会员购卡列表
</route>

<script lang="ts" setup>
import type { BookCount, BookListAll } from './types'

// 预约列表各状态数量
const bookCountsAll = ref({
  all: 0,
  wait: 0,
  underway: 0,
  finish: 0,
})
const tab = ref<number>(0)
const items = ref([{
  label: '待服务',
  count: computed(() => bookCountsAll.value.wait),
  value: 1,
}, {
  label: '服务中',
  count: computed(() => bookCountsAll.value.underway),
  value: 2,
}, {
  label: '已完成',
  count: computed(() => bookCountsAll.value.finish),
  value: 3,
}, {
  label: '全部',
  count: computed(() => bookCountsAll.value.all),
  value: null,
}])
const servMap = {
  1: 'to-service',
  2: 'in-service',
  3: 'end-service',
  4: 'cancel-service',
}

const paging = ref<ZPagingInstance<BookListAll> | null>(null)
const dataList = ref<BookListAll[]>([])
const navHeight = getMenuButtonInfo().navHeight // 只能通过系统方法获取navHeight，通过dom获取不到

const reqParams = reactive({
  storeId: customerStoreId.value,
  status: 1, // 1待服务，2服务中，3已完成，4已取消
  artisanId: null, // 手艺人id
  sDate: null, // 服务开始日期
  eDate: null, // 服务开始日期
  keyword: '', // 关键字
  pageNum: 1,
  pageSize: 10,
})

const countInfo = ref<BookCount>({
  all: 0,
  wait: 0,
  underway: 0,
  finish: 0,
})

async function queryList(page: number, pageSize: number) {
  reqParams.pageNum = page
  reqParams.pageSize = pageSize
  const res = await request.get<ListRes<BookListAll>>('/business/booking', reqParams)
  paging.value.complete(res.data.list)
}

function tabClick(val) {
  reqParams.status = items.value[val.index].value
  paging.value?.reload()
}

onShow(() => {
  getBookCount()
  paging.value?.reload()
})

async function getBookCount(cDate?: string) {
  if (cDate) {
    const res = await request.get<BookCount>('/business/booking-count', {
      storeId: customerStoreId.value,
      cDate,
    })
    countInfo.value = res.data
  }
  else {
    getCountsAll()
  }
}

async function getCountsAll() {
  const res = await request.get<BookCount>('/business/booking-count', {
    storeId: customerStoreId.value,
  })
  bookCountsAll.value = res.data
}
</script>

<template>
  <z-paging
    ref="paging"
    v-model="dataList"
    back-to-top-bottom="200rpx"
    lower-threshold="5" auto-show-back-to-top :default-page-size="10"
    @query="queryList"
  >
    <template #top>
      <view :style="{ height: `${navHeight}px` }" />
      <wd-tabs v-model="tab" :lineHeight="2" :lineWidth="24" color="#FF5A5F" @click="tabClick">
        <block v-for="item in items" :key="`t${item.value}`">
          <wd-tab :title="`${item.label}(${item.count})`" />
        </block>
      </wd-tabs>
    </template>

    <template #bottom>
      <view class="h50px" />
    </template>

    <view px-50rpx py-32rpx>
      <view v-for="(item, index) in dataList" :key="`sds-${index}`" px-48rpx py-40rpx bg-white rd-10px mb-32rpx>
        <view>
          <view flex flex-ac flex-bt>
            <view flex flex-y gap-10px>
              <view c-404143 f14 lh-14px>
                {{ item?.startTime ? fd(item?.startTime) : '--' }}&nbsp;{{ item?.startTimeStr }}
              </view>
              <view f12 flex tc flex-ac gap-10rpx f10>
                <view fb>
                  {{ item?.artisanName || '未分配' }}
                </view>
                <view w-6rpx h-6rpx round style="background-color: #91919F;" />
                <view color-white tc px-8rpx py-4rpx lh-24rpx bg-FE502E>
                  {{ item?.storeServiceTypeDesc }}
                </view>
              </view>
            </view>
            <view class="my-status-tag" :class="[servMap[item?.bookingStatus]]">
              {{ item?.bookingStatusDesc }}
            </view>
          </view>
          <view h-32rpx />
          <view>
            <template v-if="item?.serviceList?.length">
              <view v-for="(itm, idx) in item.serviceList" :key="`sd22-${index}-${idx}`" flex gap-15px flex-ac mb-20rpx>
                <wd-img
                  :width="44"
                  :height="44"
                  mode="aspectFill"
                  :src="itm?.serviceCoverImg"
                />
                <view flex-1 flex flex-y gap-20rpx>
                  <view flex flex-bt>
                    <text c-0D0D26 f14 fb>
                      {{ itm?.serviceName }}
                    </text>
                    <text c-3A3A3A f14>
                      x{{ itm?.count }}
                    </text>
                  </view>
                  <view c-161719 fs-20>
                    {{ itm?.duration ?? '--' }}分钟
                  </view>
                </view>
              </view>
            </template>
          </view>
          <view flex flex-bt>
            <view />
            <view flex flex-ac gap-5px font-size-20rpx>
              <wd-img
                :width="13"
                :height="13"
                :src="`${IMG_BASE}/icon-people.png`"
              />
              <view fb>
                {{ item?.storeCustomerName }}
              </view>
              <view w-6rpx h-6rpx round ma style="background-color: #000;" />
              <view> {{ item?.phone }}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </z-paging>
</template>

<style>
  page {
  overflow-y: hidden !important;
}
</style>

  <style lang='scss' scoped>
  .active-time {
  color: #364250 !important;
}
.booking {
  text-align: left;
  position: absolute;
  left: 0;
  display: flex;
  flex-wrap: nowrap;
  // border: 1px solid blue;
  // height: 150px;
  // top: 0;
  // background-color: #ffcbe2;
  // padding: 6px;
  // border-radius: 4px;
}
.booking-item {
  // background-color: #ffcbe2;
  padding: 6px;
  // flex: 1;
  border-left: 3px solid #00aa44;
  .ch {
    width: 100%;
  }
  // height: 150px;
  // transform: translateY(10px);
}
.plus {
  position: fixed;
  right: 10rpx;
  bottom: 90px;
  width: 112rpx;
  height: 112rpx;
  background: #3a82fb;
  border-radius: 50%;
  box-shadow: 0rpx 10rpx 20rpx 0rpx rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 48rpx;
  z-index: 100;
}
.content {
  white-space: nowrap;
}
:deep(.cus-input) {
  background: #f6f6fb !important;
  padding: 15rpx 20rpx;
}
.status {
  border-top: 1px solid #e4e8ef;
  border-bottom: 1px solid #e4e8ef;
  color: #3d3d3d;
}
.pannel {
  width: 192rpx;
  height: 192rpx;
  border-radius: 16rpx;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20rpx;
  background: #e8e9eb;
  color: #3d3d3d;
  .title {
    font-size: 28rpx;
    line-height: 28rpx;
  }
  &.active {
    background: #e3ecfc;
    color: #ff5a5f;
  }
}
:deep(.wu-calendar__weeks-day) {
  height: 70rpx !important;
  border: none !important;
}
:deep(.wu-calendar__header) {
  border: none !important;
}
:deep(.wu-calendar-item__weeks-lunar-text) {
  display: none;
}
:deep(.wu-calendar-item__weeks-box-item) {
  width: 42px !important;
  border-radius: 50% !important;
}
:deep(.wu-calendar__header-btn-box.horizontal) {
  height: 50rpx !important;
}
:deep(.wu-calendar__header-btn-box .wu-calendar__header-btn) {
  display: none !important;
}
:deep(.wu-calendar__backtoday) {
  display: none !important;
}
:deep(.wd-navbar__title) {
  font-weight: normal;
}
:deep(.wd-drop-menu__item) {
  text-align: center !important;
}
:deep(.wd-navbar__left) {
  z-index: 100 !important;
  transform: translateY(3px);
}
</style>
