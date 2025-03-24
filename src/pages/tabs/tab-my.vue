<route lang="yaml">
style:
  navigationBarTitleText: 我的
</route>

<script lang="ts" setup>
import MyTabBar from './MyTabBar.vue'

const userInfo = computed(() => useUserStore()?.userInfo)
const storeInfo = computed(() => userInfo.value?.lastStore || userInfo.value?.storeList?.[0])

function toRenew() {
  uni.navigateTo({ url: '/pagesA/my/renew' })
}
function toMyStore() {
  uni.navigateTo({ url: '/pagesA/my/store' })
}
// function toAddNewStore() {
//   uni.navigateTo({ url: '/pagesA/my/new-store' })
// }
function toServ() {
  uni.navigateTo({ url: '/pagesA/my/service' })
}
function toInvite() {
  uni.navigateTo({ url: '/pagesA/my/invite' })
}
function toSettings() {
  uni.navigateTo({ url: '/pagesA/my/settings' })
}
function toAbout() {
  uni.navigateTo({ url: '/pagesA/my/about' })
}
function toFeedBack() {
  // wx.openEmbeddedMiniProgram({
  //   appId: 'wx8abaf00ee8c3202e',
  //   extraData: {
  //     id: '673474',
  //     customData: {
  //       clientInfo: `iPhone OS 10.3.1 / 3.2.0.43 / 0`,
  //     },
  //   },
  // })
  uni.navigateTo({ url: '/pagesA/my/feedback' })
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
  </view>
  <MyCellGroup>
    <MyCell v-if="storeRole !== 2 && storeRole !== 3" label="我的店铺" noBorder @myclick="toMyStore()">
      <template #icon>
        <wd-icon name="home" size="18px" />
      </template>
      <text f14 c-3B3D3D>
        {{ storeInfo?.storeName }}
      </text>
    </MyCell>
    <MyCell label="联系客服" noBorder @myclick="toServ()">
      <template #icon>
        <wd-icon name="user-talk" size="18px" />
      </template>
    </MyCell>
    <MyCell label="意见反馈" noBorder @myclick="toFeedBack()">
      <template #icon>
        <wd-icon name="evaluation" size="18px" />
      </template>
      <text f14 c-B6BDBD>
        欢迎反馈您使用中遇到的问题
      </text>
    </MyCell>
    <MyCell label="关于我们" noBorder @myclick="toAbout()">
      <template #icon>
        <wd-icon name="warning" size="18px" />
      </template>
    </MyCell>
  </MyCellGroup>
  <view h16px />
  <MyCellGroup>
    <MyCell label="设置" noBorder @myclick="toSettings()">
      <template #icon>
        <wd-icon name="setting" size="18px" />
      </template>
    </MyCell>
  </MyCellGroup>
  <!-- <view c-FF5A5F mt20px tc lh-20px @click="toAddNewStore()">
    <text style="border-bottom: 1px solid #FF5A5F;">
      我要开新店
    </text>
  </view> -->
  <view h100px />
  <MyTabBar :tab-index="2" />
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
