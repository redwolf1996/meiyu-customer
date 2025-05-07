<route lang="yaml">
style:
  navigationBarTitleText: 支付结果
</route>

<script lang="ts" setup>
const orderId = ref(0)

onLoad((options) => {
  orderId.value = +options.orderId
})

// 返回首页
function toDashboard() {
  uni.reLaunch({ url: '/pagesA/tabs/tab-business-dashboard' })
}

// 查看订单(预约)详情
function toOrderDetail() {
  uni.navigateTo({ url: `/pagesA/order/detail?id=${orderId.value}` })
}
</script>

<template>
  <view p20px>
    <view tc fb fs-14px>
      支付成功
    </view>
    <view class="h25px" />
    <view class="h40px" />
    <view bg-white px12px py16px>
      <view c-#969696 fs-12px tc>
        客户获得
      </view>
      <view mt10px bg-#FEF6F3 rd-10px py10px px16px flex flex-ac gap16px>
        <wd-img
          :width="30"
          :height="30"
          mode="aspectFill"
          :src="`${IMG_BASE}/pay-star.png`"
        />
        <view flex flex-y flex-bt h46px>
          <view c-#6C6666 fs-12px>
            当前已到账
          </view>
        </view>
      </view>
    </view>
    <view class="menu" mt40px>
      <view class="item" @click="toOrderDetail()">
        查看订单
      </view>
      <view class="item" @click="toDashboard()">
        返回工作台
      </view>
    </view>
  </view>
</template>

<style lang='scss' scoped>
.menu {
  display: flex;
  justify-content: center;
  color: #a3a4a6;
  font-size: 12px;
  align-items: center;
  .item {
    width: 88px;
    text-align: center;
  }
  .mid {
    border-left: 1px solid #a3a4a6;
    border-right: 1px solid #a3a4a6;
  }
}
</style>
