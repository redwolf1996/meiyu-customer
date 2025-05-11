<route lang="yaml">
style:
  navigationBarTitleText: 预约结果
</route>

<script lang="ts" setup>
const orderId = ref(0)

onLoad((options) => {
  orderId.value = +options.orderId
})

// 返回首页
function toDashboard() {
  uni.reLaunch({ url: '/pages/tabs/tab-home' })
}

// 查看订单(预约)详情
function toOrderDetail() {
  uni.navigateTo({ url: `/pagesA/order/detail?id=${orderId.value}` })
}
</script>

<template>
  <view p20px>
    <view class="h40px" />
    <view tc fb fs-24px>
      预约成功
    </view>
    <view class="h20px" />
    <view class="tc fs-14px" c-#3B3D3D>
      到店凭手机号享受服务
    </view>
    <view class="h50px" />
    <view bg-white px12px py16px>
      <view bg-#FEF6F3 rd-10px py10px px16px flex flex-ac gap16px>
        <wd-img
          :width="30"
          :height="30"
          mode="aspectFill"
          :src="`${IMG_BASE}/pay-star.png`"
        />
        <view flex flex-y flex-bt h46px>
          <view c-#FF5A5F fs-12px>
            预约时间
          </view>
          <view c-#3B3D3D fs-16px fb>
            {{ bookStime }}
          </view>
        </view>
      </view>
    </view>
    <view class="menu" mt40px>
      <view class="item" @click="toOrderDetail()">
        查看预约详情
      </view>
      <view class="item" @click="toDashboard()">
        返回首页
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
