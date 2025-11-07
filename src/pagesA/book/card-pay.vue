<route lang="yaml">
style:
  navigationBarTitleText: 会员充值卡支付
</route>

<script lang="ts" setup>
import type { CashCard } from './types'

const toast = useToast()
const orderId = ref(0)
const curCard = ref<CashCard>(null)

console.log('bookInfo.value', bookInfo.value)
console.log('cashCardsStore', cashCardsStore.value)

// 页面加载时默认选中第一个卡片
onMounted(() => {
  if (cashCardsStore.value && cashCardsStore.value.length > 0) {
    selectCard(cashCardsStore.value[0])
  }
})

async function pay() {
  const res = await request.post<any>('/customer/booking', { ...bookInfo.value })
  orderId.value = res.data.orderId
  toast.info('预约成功')
  return uni.redirectTo({ url: `/pages/servs/order-success?orderId=${orderId.value}` })
}

function selectCard(card: CashCard) {
  cashCardsStore.value.map((v) => {
    v.active = false
  })
  card.active = true
  curCard.value = card
  // 将选中卡片的id赋值给bookInfo的customerCardId
  bookInfo.value.customerCardId = card.id
}
</script>

<template>
  <wd-toast />
  <view tc bg-white py20px>
    <text fs-14px>
      待收款：
    </text>
    <text fs-20px c-#FA483C>
      ￥{{ bookInfo?.amount }}
    </text>
  </view>
  <view h12px wp100 bg-#F6F6FB />
  <view bg-white py20px px20px>
    <view>
      <view fs-16px>
        会员余额
      </view>
      <view v-for="(item, index) in cashCardsStore" :key="`card-${index}`" class="card-item" :class="{ active: item?.active }" @click="selectCard(item)">
        <view fs-16px mb10px>
          {{ item?.cardName }}
        </view>
        <view flex flex-ac mb10px>
          <view fs-20px fb>
            ￥{{ item?.totalAmount }}
          </view>
          <view fs-14px c-#FA483C pl20px>
            将消耗￥{{ bookInfo?.amount }}
          </view>
        </view>
        <view flex flex-ac fs-14px>
          <view>本金￥{{ item?.amount }}</view>
          <view pl20px>
            赠金￥{{ item?.gift }}
          </view>
        </view>
        <wd-img
          v-if="item?.active"
          custom-class="corner"
          :width="16"
          :height="15.4"
          :src="`${IMG_BASE}/corner-right.png`"
        />
      </view>
    </view>
  </view>

  <view class="h150px" />

  <view fixed bottom-30px wp100>
    <view mx-40rpx mt-164rpx color-white>
      <wd-button size="large" custom-class="theme-bg" block @click="pay()">
        <view flex flex-cc>
          <text>支付</text>
        </view>
      </wd-button>
    </view>
  </view>
</template>

<style>
  .corner {
  position: absolute !important;
  right: 0;
  bottom: 0;
}
</style>

<style lang='scss' scoped>
  .card-item {
  border: 1px solid #d8d8d8;
  padding: 14px;
  margin-top: 20px;
  position: relative !important;
  &.active {
    border: 1px solid #2d60ff;
  }
}
.pay-grid {
  display: grid;
  grid-gap: 20rpx;
  grid-template-columns: repeat(2, 1fr); // css in js
}
.item {
  border: 1px solid #d8d8d8;
  border-radius: 2px;
  position: relative;
  height: 60px;
  .abs-cc {
    display: block;
    width: 90%;
    text-align: center;
  }
  &.active {
    border: 1px solid #2d60ff;
  }
}
.bottom-text {
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  color: #818181;
  font-size: 12px;
}
</style>
