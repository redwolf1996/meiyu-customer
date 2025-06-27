<route lang="yaml">
style:
  navigationBarTitleText: 订单详情
</route>

<script lang="ts" setup>
import type { PayRefundType } from '../billing/types'
import type { Detail } from './types'
import qs from 'qs'

const toast = useToast()
const id = ref(0)
const detail = ref<Detail>(null)
const PayTypesMap = ref<any>({
})
const countdownTime = ref('') // 倒计时时间
let timer: any = null // 倒计时定时器

onLoad(async (option) => {
  request.get<PayRefundType>('/pay-type-conf').then((res) => {
    res.data.payType.forEach((v) => {
      PayTypesMap.value[v.code] = v.desc
    })
  })

  id.value = +option.id
  getDetail()
})

onUnload(() => {
  // 页面卸载时清除定时器
  if (timer) {
    clearInterval(timer)
  }
})

async function getDetail() {
  const res = await request.get<Detail>(`/customer/order/${id.value}`)
  detail.value = res.data

  // 如果是待支付状态，启动倒计时
  if (detail.value?.searchStatus === 101) {
    startCountdown()
  }
}

// 计算倒计时
function startCountdown() {
  if (timer)
    clearInterval(timer)

  // 计算剩余时间
  const createTime = new Date(detail.value.createTime).getTime()
  const expireTime = createTime + 30 * 60 * 1000 // 30分钟后过期

  updateCountdown(expireTime)

  timer = setInterval(() => {
    updateCountdown(expireTime)
  }, 1000)
}

function updateCountdown(expireTime: number) {
  const now = new Date().getTime()
  const diff = expireTime - now

  if (diff <= 0) {
    clearInterval(timer)
    countdownTime.value = '00分00秒 系统将自动关闭订单'
    return
  }

  const minutes = Math.floor(diff / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  countdownTime.value = `${String(minutes).padStart(2, '0')}分${String(seconds).padStart(2, '0')}秒 系统将自动关闭订单`
}

function toRefundDetail() {
  // uni.navigateTo({ url: `/pagesA/order/refund-detail?refundId=${detail?.value.refundId}` })
}

async function calcel() {
  await request.post('/customer/order/cancel', { orderId: id.value })
  uni.showToast({ title: '取消成功' })
  await sleep(1000)
  uni.navigateBack()
}

async function toPay() {
  // 3 微信支付
  const res = await request.get<any>('/customer/order/pay', { orderId: id.value, payType: 3 })

  if (typeof window.WeixinJSBridge === 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
    }
  }
  else {
    onBridgeReady(res.data.wxPay)
  }
}

async function onBridgeReady(wxPay: any) {
  const wx = window.WeixinJSBridge
  wx.invoke('getBrandWCPayRequest', {
    appId: wxPay.appId, // 公众号ID
    timeStamp: wxPay.timestamp, // 时间戳
    nonceStr: wxPay.nonceStr, // 随机串
    package: wxPay.packageVal, // 预支付交易会话标识
    signType: wxPay.signType, // 微信签名方式：
    paySign: wxPay.paySign, // 微信签名
  }, async (res) => {
    if (res.err_msg == 'get_brand_wcpay_request:ok') {
      // 使用以上方式判断前端返回,微信团队郑重提示：
      // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠，商户需进一步调用后端查单确认支付结果。
      toast.info('支付成功')
      await sleep(1000)
      uni.redirectTo({ url: `/pages/my/orders` })
    }
  })
}
</script>

<template>
  <view px-30rpx py20rpx>
    <view p32rpx bg-white mb12px rd-4px>
      <view flex flex-ac flex-bt>
        <view f14>
          <text>收款</text>
          <text f18>
            ￥{{ detail?.amount }}
          </text>
        </view>
        <!-- <view class="my-status-tag end-service">
          {{ PayStatusMap?.[detail?.payStatus] }}
        </view> -->
        <view v-if="detail?.searchStatus === 101" class="my-status-tag to-service">
          待支付
        </view>
        <view v-if="detail?.searchStatus === 103" class="my-status-tag end-service">
          已完成
        </view>
        <view v-if="detail?.searchStatus === 105" class="my-status-tag end-service">
          已完成(退款成功)
        </view>
        <view v-if="detail?.searchStatus === 104" class="my-status-tag cancel-service">
          已取消
        </view>
      </view>

      <!-- 添加倒计时提示 -->
      <view v-if="detail?.searchStatus === 101 && countdownTime" class="countdown-tip">
        <text>还剩 {{ countdownTime }}</text>
      </view>

      <view class="h20px" />
      <view v-if="detail?.payStatus === 4">
        <MyCell label="退款金额" @myclick="toRefundDetail">
          <text f14>
            ￥{{ detail?.refundAmount }}
          </text>
        </MyCell>
        <view class="h12px" />
      </view>
      <view f12 c-434343>
        <view flex flex-ac flex-bt mb12px>
          <view>订单编号</view>
          <view>{{ detail?.orderNo }}</view>
        </view>
        <view flex flex-ac flex-bt mb12px>
          <view>创建时间</view>
          <view>{{ fdt(detail?.createTime) }}</view>
        </view>
        <view v-if="detail?.adviserName" flex flex-ac flex-bt mb12px>
          <view>销售员</view>
          <view>{{ detail?.adviserName }}</view>
        </view>
        <view v-if="detail?.payStatus === 3" flex flex-ac flex-bt mb12px>
          <view>取消时间</view>
          <view>{{ fdt(detail?.refundTime) }}</view>
        </view>
        <view v-if="detail?.notes" flex flex-ac flex-bt>
          <view>订单备注</view>
          <view>{{ detail?.notes }}</view>
        </view>
      </view>
    </view>
    <view>
      <view bg-white px-32rpx py-40rpx mb12px rd-4px>
        <view flex flex-ac gap-20rpx>
          <wd-img
            :width="18"
            :height="18"
            mode="aspectFill"
            :src="`${IMG_BASE}/icon-cus.png`"
          />
          <text fs-34>
            客户
          </text>
        </view>
        <view rd-16rpx mt-20rpx bg-F0F0F0 py-18rpx px-32rpx flex flex-ac gap-32rpx>
          <wd-img
            :width="48"
            :height="48"
            :round="true"
            :src="DEFAULT_AVATAR"
          />
          <view flex flex-y flex-bt flex-1 gap-20rpx>
            <view f16>
              {{ detail?.customerName }}
            </view>
            <view flex flex-ac flex-bt>
              <view flex flex-ac gap-16rpx>
                <text c-929292 fs-28 lh-28rpx>
                  {{ detail?.customerPhone || '--' }}
                </text>
                <wd-img
                  v-if="detail?.customerCardCount"
                  :width="16"
                  :height="16"
                  :src="`${IMG_BASE}/icon-v.png`"
                />
              </view>
              <view f12>
                <text c-929292>
                  会员卡
                </text>
                <text c-00BB00>
                  {{ detail?.customerCardCount }}张
                </text>
              </view>
            </view>
          </view>
        </view>
      </view>

      <view bg-white px-32rpx py-40rpx mb12px rd-4px>
        <view flex flex-ac gap-20rpx mb20px>
          <wd-img
            :width="18"
            :height="18"
            :src="`${IMG_BASE}/icon-book.png`"
          />
          <text fs-34>
            商品
          </text>
        </view>
        <view v-for="(item, index) in detail?.orderItem" :key="`sp-${index}`" mb20px style="border-bottom: 1px solid #eee;">
          <view fb mb12px flex flex-bt>
            <view>
              <text c-FF5A5F>
                {{ index > 9 ? index + 1 : `0${index + 1}` }}
              </text>
              <text>&nbsp;&nbsp;{{ item?.goodsName }}</text>
            </view>
            <view>x{{ item?.goodsCount }}</view>
          </view>
          <view flex flex-bt mb12px f14>
            <view>价格</view>
            <view>￥{{ item?.goodsPrice }}</view>
          </view>
          <view v-if="item?.goodsType === 1 || item?.goodsType === 4" flex flex-bt mb12px f14>
            <view>手艺人</view>
            <view>{{ item?.artisanName || '未分配' }}</view>
          </view>
          <view v-if="item?.cardName && (detail?.createSource === 1 || detail?.createSource === 4)" flex flex-bt mb12px f14>
            <view>使用卡项</view>
            <view>{{ item?.cardName || '--' }}</view>
          </view>
          <view flex flex-bt mb12px f14>
            <view />
            <view>小计&#12288;￥{{ item?.amount }}</view>
          </view>
        </view>
        <view f14 flex flex-ac flex-bt>
          <view>合计</view>
          <view>￥{{ detail?.amount }}</view>
        </view>
      </view>

      <view v-if="detail?.payStatus === 2" f14 bg-white px-32rpx py-40rpx mb12px rd-4px>
        <view flex gap16px flex-ac mb12px>
          <view>付款方式</view>
          <view>{{ detail?.payTypeDesc || '--' }}</view>&nbsp;&nbsp;￥{{ detail?.amount }}
        </view>
        <view flex gap16px flex-ac>
          <view>支付时间</view>
          <view>{{ fdt(detail?.payTime) }}</view>
        </view>
      </view>
    </view>
  </view>
  <view class="h20px" />
  <view v-if="detail?.payStatus === 1" flex flex-cc mt-16px px-60rpx gap10px>
    <button class="my-btn cancel" @click="calcel()">
      取消订单
    </button>
    <button class="my-btn theme" @click="toPay()">
      去支付
    </button>
  </view>

  <view class="h50px" />
</template>

<style lang='scss' scoped>
.countdown-tip {
  margin-top: 12px;
  padding: 8px;
  background-color: #fce8e9;
  color: #ff5a5f;
  font-size: 12px;
  text-align: center;
  border-radius: 4px;
}
</style>
