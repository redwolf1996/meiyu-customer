<route lang="yaml">
style:
  navigationBarTitleText: 预约服务
</route>

<script lang="ts" setup>
import weixin from '@wtto00/jweixin-esm'
import qs from 'qs'

const toast = useToast()

// 商品原价合计
// const totalOriAmount = sumArray(bookInfo.value.service.map((v) => {
//   const cost = v.price2 || v.price
//   return func_mul(cost, v.goodsCount)
// }))

// 商品优惠后合计
const totalToPayAmount = sumArray(bookInfo.value.service.map(v => v.amount))
const orderId = ref(0)
console.log('bookInfo.value', bookInfo.value)

bookInfo.value.payType = 3 // 默认微信支付
// 如果服务列表中存在卡项优惠
if (bookInfo.value.service.some(v => v.cardReduceAmount)) {
  bookInfo.value.payType = 6 // 充值卡支付
}

if (bookInfo.value.service[0].payType === 2) { // 2到店支付 1在线支付
  bookInfo.value.payType = 0 // 充值卡支付
}

// 商品优惠金额合计
// const discountAmount = func_sub(totalOriAmount, totalToPayAmount)

// 提交预约
async function doSubmit() {
  bookInfo.value.amount = totalToPayAmount
  const res = await request.post<any>('/customer/booking', { ...bookInfo.value })
  orderId.value = res.data.orderId

  // payType 1 在线支付 2 到店支付
  if (bookInfo.value.amount === 0 || bookInfo.value.payType === 0) { // 总金额为0或者预约支付方式为到店支付时直接预约成功，不需要支付
    toast.info('预约成功')
    return uni.redirectTo({ url: `/pages/servs/order-success?orderId=${orderId.value}` })
  }

  if (typeof window.WeixinJSBridge === 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
    }
  }
  else {
    onBridgeReady(res.data.wxPay)
  }
}
function onBridgeReady(wxPay: any) {
  const wx = window.WeixinJSBridge
  wx.invoke('getBrandWCPayRequest', {
    appId: wxPay.appId, // 公众号ID
    timeStamp: wxPay.timestamp, // 时间戳
    nonceStr: wxPay.nonceStr, // 随机串
    package: wxPay.packageVal, // 预支付交易会话标识
    signType: wxPay.signType, // 微信签名方式：
    paySign: wxPay.paySign, // 微信签名
  }, (res) => {
    if (res.err_msg == 'get_brand_wcpay_request:ok') {
      // 使用以上方式判断前端返回,微信团队郑重提示：
      // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠，商户需进一步调用后端查单确认支付结果。
      toast.info('预约成功')
      uni.redirectTo({ url: `/pages/servs/order-success?orderId=${orderId.value}` })
    }
  })
}
</script>

<template>
  <wd-toast />
  <view px15px py12px>
    <view mb16px px12px py16px f12 flex flex-y gap-23rpx bg-white>
      <view bg-FCE8E9 c-FF5A5F h38rpx w128rpx tc flex flex-cc>
        {{ bookInfo.storeServiceType === 1 ? '预约到店' : '上门服务' }}
      </view>
      <view flex flex-ac>
        <text c-818181>
          预约时间：
        </text>
        <text pl10px>
          {{ fdt(bookInfo.startTime) ?? '--' }}
        </text>
      </view>
      <!-- <view flex flex-ac>
        <text c-818181>
          预约人：
        </text>
        <text pl10px>
          {{ bookInfo.storeCustomerName ?? '--' }}
        </text>
      </view>
      <view flex flex-ac>
        <text c-818181>
          手机号：
        </text>
        <text pl10px>
          {{ bookInfo.storeCustomerPhone ?? '--' }}
        </text>
      </view> -->
      <view flex flex-ac>
        <text c-818181>
          手艺人：
        </text>
        <text pl10px>
          {{ bookInfo?.artName || '到店分配' }}
        </text>
      </view>
      <view v-if="bookInfo.storeServiceType === 2" flex flex-ac>
        <text c-818181>
          上门地址：
        </text>
        <text pl10px>
          {{ bookInfo?.customerAddress || '--' }}
        </text>
      </view>
    </view>

    <view mb16px px12px py16px bg-white>
      <view mb10px c-1E1E1E>
        预约服务
      </view>
      <view flex flex-y gap13px>
        <view
          v-for="(item, index) in bookInfo.service" :key="`k-${index}`" flex gap-12px
        >
          <wd-img
            radius="10px"
            :width="72"
            :height="72"
            mode="aspectFill"
            :src="item.coverImg"
          />
          <view flex-1 flex flex-y flex-bt>
            <view f14 c-3B3D3D mb4px flex flex-ac flex-bt>
              <text>{{ item.name || '--' }}</text>
              <text fs-22 c-7C7C7C>
                {{ item.duration || '--' }}分钟
              </text>
            </view>
            <view flex flex-ac flex-bt>
              <view flex flex-ac gap4px>
                <text c-FF1919 f18>
                  ￥{{ item.price2 ?? item.price }}
                </text>
                <text v-if="isNumber(item.price2)" line-through f12 c-D4D4D4>
                  ￥{{ item.price }}
                </text>
              </view>
              <view f12 c-7C7C7C>
                x{{ item.goodsCount ?? 1 }}
              </view>
            </view>

            <view v-if="item.cardName" flex flex-ac flex-bt>
              <view f12 c-7C7C7C>
                {{ item.cardName || '--' }}
              </view>
              <view f12 c-7C7C7C>
                <text v-if="item.cardType === 1">
                  -{{ item.cardReduceAmount }}次
                </text>
                <text v-else>
                  -￥{{ item.cardReduceAmount }}
                </text>
              </view>
            </view>

            <view flex flex-xr flex-ac>
              <text c-#FA483C>
                ￥{{ item.amount }}
              </text>
              <text f14>
                小计：
              </text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view mb16px px12px py16px bg-white>
      <view flex flex-ac flex-bt>
        <view>商品金额</view>
        <text c-#818181 font-size-14px>
          ￥{{ totalToPayAmount }}
        </text>
      </view>

      <!-- <view v-if="discountAmount" flex flex-ac flex-bt fs-14px mt5px>
        <view c-#FF4E4E>
          优惠金额
        </view>
        <text c-#FF4E4E font-size-14px>
          -￥{{ discountAmount }}
        </text>
      </view> -->

      <view flex flex-ac flex-xr mt10px>
        <text c-#FF5A5F>
          ￥{{ totalToPayAmount }}
        </text>
        <text f14>
          合计：
        </text>
      </view>
    </view>

    <view mb16px px12px py16px bg-white>
      <view>备注</view>
      <view flex flex-ac flex-bt f14 pt5px>
        {{ bookInfo.notes }}
      </view>
    </view>
  </view>

  <view :class="[safeBottom() ? 'py20px' : 'py10px']" bg-white px20px flex flex-bt flex-ac pf wp100 bottom-0px>
    <view f12 c-FF5A5F>
      {{ fdt(bookInfo?.startTime) }}&nbsp;{{ bookInfo.storeServiceType === 1 ? '到店' : '上门' }}
    </view>
    <MyButton width="200rpx" @click="doSubmit()">
      提交预约
    </MyButton>
  </view>
</template>

<style lang='scss' scoped>
page {
  background-color: #f5f5f5;
}
</style>
