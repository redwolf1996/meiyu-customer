<route lang="yaml">
layout: common
style:
  navigationBarTitleText: 预约时间
</route>

<script lang="ts" setup>
import type { Times } from '@/utils'
import { flatten } from 'lodash-es'
import type { BookingData, TimeOccupy } from './types'
import { useCustomerStore } from '@/stores/modules/customer'

const customerStore = useCustomerStore()
const customerStoreId = computed(() => customerStore.customerInfo?.lastStoreId)
const tw = +new Date().getDay()
const curWeek = ref(tw === 0 ? 7 : tw)
const instance = getCurrentInstance()
const query = uni.createSelectorQuery().in(instance.proxy)
const today = fd(+new Date())
const day = ref(fd(+new Date()))
const stime = ref('')
const duration = ref(0)
const etime = computed(() => calculateEndTime(stime.value, duration.value))
const selectedTime = computed(() => {
  if (!stime.value)
    return ''
  return `${day.value} ${stime.value}-${etime.value}`
})
const times = ref()
const workStime = ref('')
const workEtime = ref('')
const workWeeks = ref([])

onShow(() => {
  init()
})

// 设置总时长
function setTotalDuration() {
  let tmpDuration = 0
  bookInfo.value.service.map((v) => {
    tmpDuration += v.duration * v.goodsCount
  })
  duration.value = tmpDuration
}

async function init() {
  const re = await request.get<BookingData>(`/customer/store/${customerStoreId.value}`)
  workStime.value = re.data.workStime.slice(0, -3)
  workEtime.value = re.data.workEtime.slice(0, -3)
  workWeeks.value = re.data.workWeek
  times.value = generateTimeSlots(workStime.value, workEtime.value)

  const params = {
    artisanId: bookInfo.value?.artisanId,
    cDate: day.value,
  }
  const res = await request.get<TimeOccupy[]>('/customer/booking-artisan', params)
  const employIndexes = flatten(res.data?.map(v => v?.employIndex)) // 后端计算的disabled时间点index

  setTotalDuration()

  // 计算当前时间之前的时间格子索引（只在选择今天时生效）
  let currentTimeDisabledIndexes: number[] = []
  if (day.value === today) {
    const now = new Date()
    const currentHours = now.getHours()
    const currentMinutes = now.getMinutes()

    // 计算当前时间所在的时间段（向上取整到下一个15分钟）
    // 例如：8:24 -> 应该禁用到 8:30 之前（即 8:15 及之前可禁用，8:30 开始可选）
    const nextSlotMinutes = Math.ceil(currentMinutes / 15) * 15
    let nextSlotHours = currentHours
    let finalMinutes = nextSlotMinutes

    // 如果分钟数达到60，则进入下一个小时
    if (nextSlotMinutes >= 60) {
      nextSlotHours = currentHours + 1
      finalMinutes = 0
    }

    const nextAvailableTimeString = `${String(nextSlotHours).padStart(2, '0')}:${String(finalMinutes).padStart(2, '0')}`

    // 找到第一个可用的时间格子索引（大于等于 nextAvailableTimeString）
    const firstAvailableIndex = times.value.findIndex(t => t.value >= nextAvailableTimeString)

    // disable all slots before firstAvailableIndex
    // if firstAvailableIndex === -1 (current time beyond all slots), disable ALL slots
    if (firstAvailableIndex === -1) {
      currentTimeDisabledIndexes = Array.from({ length: times.value.length }, (_, index) => index)
    }
    else if (firstAvailableIndex > 0) {
      currentTimeDisabledIndexes = Array.from({ length: firstAvailableIndex }, (_, index) => index)
    }
  }

  times.value = times.value.map((v, i) => {
    return {
      selected: v.selected,
      // 禁用逻辑：1. 不在营业周 2. 当前时间之前（仅今天） 3. 已被占用的时间
      disabled: !workWeeks.value.includes(curWeek.value)
      || currentTimeDisabledIndexes.includes(i)
      || employIndexes.includes(i),
      value: v.value,
    }
  })
}

onMounted(() => {
  query.select('#mytable').boundingClientRect((data: any) => {
    console.log(data)
  }).exec()
})

onHide(() => {
  bookInfo.value = null
})

function calendarChange(e) {
  curWeek.value = e.lunar.nWeek
  day.value = e.fulldate
  init()
}

function clickItem(item: Times) {
  if (item.disabled)
    return false
  times.value.map((v) => {
    v.selected = false
  })
  item.selected = true
  stime.value = item.value
}

async function save() {
  bookStime.value = `${day.value} ${stime.value}`
  if (bookInfo.value?.bookId) {
    await request.put('/customer/booking/time', {
      id: bookInfo.value.bookId,
      stime: `${bookStime.value}:00`,
    })
  }
  uni.navigateBack()
}
</script>

<template>
  <wu-calendar
    :startDate="today"
    color="#2F4BEC" :itemHeight="50" startWeek="mon"
    :fold="true" type="week" :insert="true" @change="calendarChange"
  />
  <view py20px bg-white mt12px px50rpx>
    <view v-for="(itm, idx) in bookInfo?.service" :key="`info-${idx}`" tc>
      <text>{{ itm.name }}</text>
      <text c-FF5A5F pl10px>
        {{ itm.duration }}分钟&nbsp;x{{ itm?.goodsCount }}
      </text>
    </view>
    <view f14 tc mt5px mb50rpx>
      <text>手艺人</text>
      <text c-FF5A5F pl10px>
        {{ bookInfo.artName || '未分配' }}
      </text>
    </view>
    <view id="mytable" class="my-table">
      <template v-for="item in times" :key="item.value">
        <view class="item pr" :class="{ selected: item.selected, disabled: item.disabled }" @click="clickItem(item)">
          {{ item.value }}
          <wd-icon v-if="item.selected" name="check" color="rgba(255,255,255,0.8)" size="20px" custom-style="position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)" />
        </view>
      </template>
    </view>
    <view tc mt20px>
      <wd-img
        :height="20"
        mode="heightFix"
        :src="`${IMG_BASE}/book-status.png`"
      />
    </view>
    <view tc mt20px c-FFAB2D f14>
      已选：{{ selectedTime }}
    </view>
  </view>

  <view mt-48rpx color-white pf w-90% bottom-20px fc>
    <wd-button size="large" custom-class="theme-bg" :block="true" @click="save()">
      <view flex flex-cc>
        <text>确定</text>
      </view>
    </wd-button>
  </view>

  <view class="h50px" />
</template>

<style lang='scss' scoped>
.my-table {
  display: grid;
  box-sizing: border-box !important;
  border-left: 1px solid #eaeaea;
  border-top: 1px solid #eaeaea;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 43px;
  height: 300px;
  overflow-y: scroll;
  .item {
    box-sizing: border-box !important;
    border-right: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    &.disabled {
      background: #c8c7c7;
    }
    &.selected {
      background: #3fa85e;
    }
  }
}
.active-time {
  color: #364250 !important;
}
.booking {
  text-align: left;
  position: absolute;
  height: 150px;
  left: 0;
  top: 0;
  background-color: #ffcbe2;
  padding: 6px;
  border-radius: 4px;
}
.plus {
  position: fixed;
  right: 10rpx;
  bottom: 10rpx;
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
