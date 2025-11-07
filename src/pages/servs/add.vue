<route lang="yaml">
layout: false
style:
  navigationBarTitleText: 预约服务
</route>

<script lang="ts" setup>
import { bookInfo } from '@/stores/book-info'
import type { ListStaff, Service } from './types'
import qs from 'qs'
import { useCustomerStore } from '@/stores/modules/customer'

const customerStore = useCustomerStore()
const customerStoreId = computed(() => customerStore.customerInfo?.lastStoreId)
const curIndex = ref(0) // 预约服务列表当前选择项的索引

// 根据选中的服务动态生成服务方式选项
const columns = computed<SelItem[]>(() => {
  const result: SelItem[] = []
  if (checkedServs.value.length > 0) {
    const firstServ = checkedServs.value[0]
    // 如果支持到店服务
    if (firstServ.isToStore === 1) {
      result.push({
        label: '到店',
        value: 1,
      })
    }
    // 如果支持上门服务
    if (firstServ.isToDoor === 1) {
      result.push({
        label: '上门',
        value: 2,
      })
    }
  }
  return result
})

const model = reactive<any>({
  storeServiceType: computed(() => columns.value.length > 0 ? columns.value[0].value : 1),
  customerAddress: null,
  startTime: computed(() => `${bookStime.value}:00`),
  artisanId: null,
  payType: null,
  customerCardId: null,
  notes: null,
  service: [],
  amount: 0,
})
const artName = ref('')
const listStaff = ref<ListStaff[]>([])
const visibleStaff = ref(false)

watch(
  () => model.storeServiceType,
  (newValue) => {
    if (newValue === 1)
      model.customerAddress = null
  },
)

onLoad(async () => {
  console.log('checkedServs', checkedServs.value)
  getStaff()
})

async function getStaff() {
  // jobCode 职务,1店长，2手艺人，3销售
  const res = await request.get<ListRes<ListStaff>>('/customer/staff', { storeId: customerStoreId.value, jobCode: 2 })
  listStaff.value = res.data.list.map((v) => {
    return {
      ...v,
      active: false,
    }
  })
}

function toSelectStaff() {
  visibleStaff.value = true
}

function clickItem(item: ListStaff) {
  listStaff.value.forEach((val: any) => {
    val.active = false
  })
  item.active = !item.active
  if (item.active) {
    model.artisanId = item.storeStaffId
    artName.value = item.userName
  }
}

function toSelServTime() {
  if (!checkedServs.value.length) {
    return uni.showToast({
      title: '请先选择服务',
      icon: 'none',
    })
  }
  bookInfo.value = {
    ...model,
    artName: artName.value,
  }
  uni.navigateTo({ url: '/pages/servs/time' })
}

async function save() {
  if (model.storeServiceType === 2 && !model.customerAddress) {
    return uni.showToast({
      title: '请选择上门地址',
      icon: 'none',
    })
  }
  if (!bookStime.value) {
    return uni.showToast({
      title: '请选择服务时间',
      icon: 'none',
    })
  }
  bookInfo.value = {
    ...model,
    artName: artName.value,
  }
  uni.navigateTo({ url: '/pagesA/book/submit' })
}

function toSelCard(item, index: number) {
  curIndex.value = index
  const storeCustomerId = customerStoreId.value
  const goodsId = item.storeServiceId
  const goodsType = 1
  const params = qs.stringify({ storeCustomerId, goodsId, goodsType })
  uni.navigateTo({ url: `/pagesA/billing/select-card-billing?${params}` })
}

function init() {
  model.service = checkedServs.value.map((v) => {
    return {
      storeServiceId: v.id,
      name: v.name,
      duration: v.duration,
      price: v.price,
      price2: v.price2,
      coverImg: v.coverImg,
      goodsCount: v?.goodsCount || 1, // 数量
      totalAmount: v?.totalAmount || 0, // 商品原价总价
      amount: v?.amount || 0, // 商品优惠后总价
      cardReduceAmount: v?.cardReduceAmount || 0, // 卡项优惠金额
      cardShowName: v?.cardShowName || '', // 卡项展示的名称 例如：洗发次卡 -1次
      payType: v?.payType,
    }
  })
  model.service.forEach((item: Partial<Service>) => {
    const cost = item.price2 ?? item.price
    item.totalAmount = computed(() => {
      return func_mul(cost, item.goodsCount)
    })
    item.amount = computed(() => {
      return func_mul(func_sub(cost, item.cardReduceAmount), item.goodsCount)
    })
  })
}

onLoad(() => {
  init()
})

watch(() => checkedServs.value, () => {
  init()
})

// 选择卡项
watch(() => curSelectedCardToCash.value, () => {
  console.log('curSelectedCardToCash.value', curSelectedCardToCash.value)
  model.service.forEach((item: Partial<Service>, index: number) => {
    if (curIndex.value === index) {
      // 消费价格（有优惠价使用优惠价，没有则使用原价）
      const cost = item.price2 ?? item.price
      item.customerCardId = curSelectedCardToCash.value?.customerCardId
      item.cardId = curSelectedCardToCash.value?.cardId
      item.equity = curSelectedCardToCash.value?.equity // 可用次数
      item.cardSecondType = curSelectedCardToCash.value?.cardSecondType
      item.cardName = curSelectedCardToCash.value?.cardName
      item.cardType = curSelectedCardToCash.value?.cardType

      // 处理次卡和非次卡，卡项扣减显示信息
      if (item.cardType === 1) { // 次卡
        if (item.cardSecondType === 2) { // 不限次卡
          item.cardReduceAmount = item.goodsCount
        }
        else { // 通卡和有限次卡
          item.cardReduceAmount = item.goodsCount <= item.equity ? item.goodsCount : item.equity
        }
        item.cardShowName = `${item.cardName}\u00A0\u00A0\u00A0\u00A0\-${item.cardReduceAmount}次`
      }
      else { // 折扣卡、充值卡(当折扣卡使用)
        item.cardReduceAmount = func_mul(cost, func_sub(1, func_div(curSelectedCardToCash.value?.equity, 10)))
        item.cardShowName = `${item.cardName}\u00A0\u00A0\u00A0\u00A0\-￥${item.cardReduceAmount}`
      }

      item.totalAmount = computed(() => { // 商品原价总价
        return func_mul(cost, item.goodsCount)
      })
      item.amount = computed(() => { // 小计
        if (item?.cardType === 1) {
          if (item.cardSecondType === 2) {
            return 0
          }
          else {
            if (item.goodsCount <= item.equity)
              return 0
            return func_mul(cost, item.goodsCount - item.equity)
          }
        }
        return func_mul(func_sub(cost, item.cardReduceAmount), item.goodsCount)
      })
    }
  })
})

// 改变每一项服务的数量
function handleChangeGoodsCount(item: Partial<Service>) {
  const cost = item.price2 ?? item.price
  if (item.cardName) {
    if (item.cardType === 1) {
      if (item.cardSecondType === 2) {
        item.cardReduceAmount = item.goodsCount
      }
      else {
        item.cardReduceAmount = item.goodsCount <= item.equity ? item.goodsCount : item.equity
      }

      item.cardShowName = `${item.cardName}\u00A0\u00A0\u00A0\u00A0\-${item.cardReduceAmount}次`
    }
    else {
      item.cardShowName = `${item.cardName}\u00A0\u00A0\u00A0\u00A0\-￥${item.cardReduceAmount}`
    }

    item.totalAmount = computed(() => { // 商品原价总价
      return func_mul(cost, item.goodsCount)
    })
    item.amount = computed(() => { // 小计
      if (item?.cardType === 1) {
        if (item.cardSecondType === 2) {
          return 0
        }
        else {
          if (item.goodsCount <= item.equity)
            return 0
          return func_mul(cost, item.goodsCount - item.equity)
        }
      }
      return func_mul(func_sub(cost, item.cardReduceAmount), item.goodsCount)
    })
  }

  checkedServs.value.forEach((v) => {
    if (v.id === item.storeServiceId) {
      v.goodsCount = item.goodsCount
    }
  })
}
</script>

<template>
  <page-meta :page-style="`overflow:${visibleStaff ? 'hidden' : 'visible'};`" />
  <wd-toast />
  <wd-popup
    v-model="visibleStaff" :z-index="999" :lock-scroll="true" :safe-area-inset-bottom="false" position="right"
    custom-style="height: 100vh;width: 80%;background: #F9F9F9;"
  >
    <view tc f14 ps top-0 bg-white h-40px lh-40px>
      选择手艺人
    </view>
    <view mt10px>
      <view v-for="(item, index) in listStaff" :key="`sd-${index}`" flex flex-ac flex-bt bg-white px40rpx py20rpx style="border-bottom: 1px solid #DFDFDF" @click="clickItem(item)">
        <view>
          <view f14 c-313131>
            {{ item.userName }}
          </view>
          <view f12 c-777777 mt6px>
            {{ item.phone }}
          </view>
        </view>
        <wd-img
          v-if="item.active"
          :width="26"
          :height="19"
          :src="`${IMG_BASE}/icon-correct.png`"
        />
      </view>
      <view h50px />
    </view>

    <view tc flex flex-cc color-white bg-white bottom-0 ps py-20px @click="visibleStaff = false">
      <MyButton width="500rpx">
        确定
      </MyButton>
    </view>
  </wd-popup>
  <wd-form :model="model">
    <wd-cell-group :border="true">
      <wd-picker
        v-model="model.storeServiceType"
        :rules="[{ required: true, message: '请选择服务方式' }]"
        label="服务方式" align-right :columns="columns"
      />
      <wd-input
        v-if="model.storeServiceType === 2"
        v-model="model.customerAddress"
        label-width="80px"
        label="上门地址"
        clearable
        align-right
        placeholder="请输入"
        :rules="[{ required: true, message: '请填写上门地址' }]"
      />
      <wd-cell title="手艺人" :is-link="true" @click="toSelectStaff()">
        <view>
          <text v-if="!artName" c-#B6BDBD>
            请选择手艺人
          </text>
          <text v-else>
            {{ artName }}
          </text>
        </view>
      </wd-cell>
    </wd-cell-group>
    <view v-if="checkedServs.length">
      <view v-for="(item, index) in model.service" :key="`serv-${index}`" flex flex-y gap10px>
        <MyCellGroup>
          <view flex flex-ac flex-bt>
            <view theme-color fs-14px fb>
              {{ item.name }}
            </view>
            <view>
              <wd-input-number v-model="item.goodsCount" :min="1" @change="handleChangeGoodsCount(item)" />
            </view>
          </view>
          <view
            pt-20rpx
            flex flex-bt flex-ac
          >
            <view c-848486 fs-12px>
              <text>价格</text>
            </view>
            <view fs-12px flex flex-ac gap-6px style="max-width: 60%">
              <text c-#FF1919>
                ￥{{ item.price2 ?? item.price }}
              </text>
              <text v-if="isNumber(item.price2)" line-through c-848486>
                ￥{{ item.price }}
              </text>
            </view>
          </view>
          <view
            pt-20rpx
            flex flex-bt flex-ac
          >
            <view c-848486 fs-12px>
              <text>服务时长</text>
            </view>
            <view fs-12px flex flex-ac gap-6px style="max-width: 60%">
              <view c-848486>
                约{{ item.duration }}分钟
              </view>
            </view>
          </view>
          <view
            pt-20rpx
            flex flex-bt flex-ac
            @click="toSelCard(item, index)"
          >
            <view c-848486 fs-12px>
              <text>使用卡项</text>
            </view>
            <view flex flex-ac gap-6px style="max-width: 60%">
              <view c-848486 flex flex-ac fs-12px>
                <text v-if="!item.cardShowName" c-#B6BDBD fs-12px>
                  请选择
                </text>
                <view v-else fs-12px>
                  {{ item.cardShowName }}
                </view>
                <wd-icon name="arrow-right" size="14px" color="#bfbfbf" />
              </view>
            </view>
          </view>
          <view
            pt-20rpx
            flex flex-bt flex-ac
          >
            <view c-848486 fs-12px>
              <text>小计</text>
            </view>
            <view fs-12px flex flex-ac gap-6px style="max-width: 60%">
              <text c-#FF1919>
                ￥{{ item.amount }}
              </text>
            </view>
          </view>
        </MyCellGroup>
      </view>
    </view>
    <view class="h10px" />
    <view bg-white f14 tc>
      <wd-cell title="服务时间" required :is-link="true" @click="toSelServTime()">
        <view>
          <text v-if="!bookStime" c-#B6BDBD>
            请选择服务时间
          </text>
          <text v-else>
            {{ bookStime }}
          </text>
        </view>
      </wd-cell>
    </view>
    <view class="h10px" />
    <view>
      <view px20px py12px font-size-14px>
        备注
      </view>
      <view bg-white px-40rpx py-24rpx>
        <wd-textarea
          v-model="model.notes"
          placeholderStyle="font-size: 14px;color:#C9CDD4;"
          placeholder="请输入预约备注" :maxlength="200" auto-height clearable show-word-limit
        />
      </view>
      <view mx-40rpx mt-64rpx color-white>
        <wd-button size="large" custom-class="theme-bg" block @click="save()">
          <view flex flex-cc>
            <text>确定</text>
          </view>
        </wd-button>
      </view>
    </view>
  </wd-form>
  <wu-safe-bottom />
</template>

<style>
.my-cell {
  line-height: 10px !important;
}
</style>

<style lang='scss' scoped>
.my-cell {
  line-height: 10px !important;
}
</style>
