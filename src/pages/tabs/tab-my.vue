<route lang="yaml">
style:
  navigationBarTitleText: 我的
</route>

<script lang="ts" setup>
import { useCustomerStore } from '@/stores/modules/customer'
import MyTabBar from './MyTabBar.vue'

// const customerInfo = computed(() => useCustomerStore()?.customerInfo)

function toMyOrders() {
  uni.navigateTo({ url: '/pages/my/orders' })
}
function toMyCards() {
  uni.navigateTo({ url: '/pages/my/cards' })
}
// function toMyPoints() {
//   uni.navigateTo({ url: '/pages/my/points' })
// }
function toCallBusiness() {
  uni.navigateTo({ url: '/pages/my/service' })
}
function toQuit() {
  useCustomerStore().clearCustomerInfo()
  uni.redirectTo({ url: '/pages/login/index' })
}
function toCallMeiyumini() {
  // 调起美预小程序
  // uni.navigateToMiniProgram({
  //   appId: 'wx4523c84aefbd91d2',
  //   path: 'pages/index',
  //   success: () => {
  //     console.log('调起成功')
  //   },
  // })

  uni.navigateTo({ url: '/pages/my/minapp' })
}
</script>

<template>
  <view p20px bg-white>
    <view flex flex-ac gap12px>
      <wd-img
        :round="true"
        :width="56"
        :height="56"
        :src="DEFAULT_AVATAR"
      />
      <view flex-1 flex flex-y flex-bt h56px pr>
        <view c-141414 f18>
          石美华
        </view>
        <view flex flex-ac gap5px>
          <text f14 c-969699>
            178****1234
          </text>
        </view>
      </view>
    </view>
    <view flex flex-ac flex-rd f12 mt20px rd8px style="box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);padding: 16px 0;">
      <view flex flex-y flex-cc gap8px>
        <view>¥100</view>
        <view c-#717171>
          卡余额
        </view>
      </view>
      <view flex flex-y flex-cc gap8px>
        <view>100</view>
        <view c-#717171>
          次卡
        </view>
      </view>
      <view flex flex-y flex-cc gap8px>
        <view>100</view>
        <view c-#717171>
          折扣卡
        </view>
      </view>
      <view flex flex-y flex-cc gap8px>
        <view>100</view>
        <view c-#717171>
          积分
        </view>
      </view>
    </view>
    <!-- <view mt20px>
      我的订单
    </view>
    <view flex flex-ac flex-rd f12 mt20px rd8px>
      <view flex flex-y flex-cc gap8px>
        <view>
          <wd-icon name="money-circle" size="24px" />
        </view>
        <view c-#717171>
          待支付
        </view>
      </view>
      <view flex flex-y flex-cc gap8px>
        <wd-badge :modelValue="1">
          <wd-icon name="clock" size="24px" />
        </wd-badge>
        <view c-#717171>
          待服务
        </view>
      </view>
    </view> -->
  </view>
  <MyCellGroup>
    <MyCell label="我的预约" noBorder @myclick="toMyOrders()" />
    <MyCell label="我的卡项" noBorder @myclick="toMyCards()" />
    <!-- <MyCell label="积分记录" noBorder @myclick="toMyPoints()" /> -->
    <MyCell label="联系商家" noBorder @myclick="toCallBusiness()" />
    <MyCell label="退出登录" noBorder @myclick="toQuit()" />
  </MyCellGroup>
  <view h16px />

  <view px16px>
    <wd-img
      width="100%"
      :height="104"
      mode="aspectFill"
      :src="`${IMG_BASE}/i-need-a-store.png`"
      @click="toCallMeiyumini()"
    />
  </view>
  <view h100px />
  <MyTabBar :tab-index="1" />
</template>

<style lang='scss' scoped>
.xf {
  padding: 4px 12px;
  text-align: center;
  font-size: 12px;
  line-height: 14px;
  height: 24px;
  align-items: center;
  background-color: #e3c377;
  color: #ffffff;
  display: inline-block;
  border-radius: 30px;
}
.yy {
  padding: 2px 4px;
  font-size: 11px;
  line-height: 12px;
  color: #fff;
  background-color: #ff6619;
  text-align: center;
}
</style>
