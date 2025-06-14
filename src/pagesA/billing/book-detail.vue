<route lang="yaml">
style:
  navigationBarTitleText: 订单详情
  navigationStyle: custom
</route>

<script lang="ts" setup>
import MyNavBar from '@/components/MyNavBar.vue'
</script>

<template>
  <view class="container">
    <MyNavBar title="订单详情" />
    <view class="content">
      <view class="status-section">
        <view class="status-title">
          待付款
        </view>
        <view class="status-countdown">
          剩余 15 分钟自动关闭
        </view>
      </view>

      <view class="card appointment-info">
        <view class="tag">
          预约到店
        </view>
        <view class="info-item">
          <text class="label">
            预约时间：
          </text>
          <text class="value">
            05-22 10:00
          </text>
        </view>
        <view class="info-item">
          <text class="label">
            预约人：
          </text>
          <text class="value">
            hailey
          </text>
        </view>
        <view class="info-item">
          <text class="label">
            预约人手机号：
          </text>
          <text class="value">
            18911797527
          </text>
        </view>
        <view class="info-item">
          <text class="label">
            手艺人：
          </text>
          <text class="value">
            到店分配
          </text>
        </view>
      </view>

      <view class="card verification-code">
        <view class="code-info">
          <view class="label">
            核销码
          </view>
          <view class="code">
            1785 1923 56
          </view>
        </view>
        <image class="qrcode" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </view>

      <view class="card service-details">
        <view class="shop-name">
          原素美容美甲店
        </view>
        <view class="service-item">
          <image class="service-image" src="https://img.yzcdn.cn/vant/leaf.jpg" />
          <view class="service-info">
            <view class="service-name">
              显示服务名称
            </view>
            <view class="service-duration">
              服务时长: 60分钟
            </view>
          </view>
          <view class="service-price">
            <view>¥198</view>
            <view class="quantity">
              x1
            </view>
          </view>
        </view>
        <view class="contact-merchant">
          <wd-button custom-class="contact-btn">
            <wd-icon name="call" />
            联系商家
          </wd-button>
        </view>
      </view>

      <view class="card info-card">
        <view class="info-row">
          <text class="label">
            商品金额
          </text>
          <text class="value">
            ¥3980.00
          </text>
        </view>
        <view class="info-row">
          <text class="label" />
          <text class="value">
            需支付：<text class="amount-due">
              ¥3980
            </text>
          </text>
        </view>
      </view>

      <view class="card info-card">
        <view class="info-row">
          <text class="label">
            买家留言
          </text>
          <text class="value-light">
            暂未填写
          </text>
        </view>
      </view>

      <view class="card info-card">
        <view class="info-row">
          <text class="label">
            订单编号
          </text>
          <view class="value-with-copy">
            <text class="value">
              MY20240517172733007500045
            </text>
            <view class="copy-btn">
              复制
            </view>
          </view>
        </view>
        <view class="info-row">
          <text class="label">
            创建时间
          </text>
          <text class="value">
            2024-05-17 17:27:33
          </text>
        </view>
      </view>
    </view>
    <view class="bottom-actions">
      <wd-button custom-class="action-btn cancel-btn">
        取消预约
      </wd-button>
      <wd-button type="primary" custom-class="action-btn pay-btn">
        继续支付
      </wd-button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.container {
  background-color: #f8f8f8;
  min-height: 100vh;
  padding-bottom: 180rpx;
  box-sizing: border-box;
}

.content {
  padding: 0 32rpx;
}

.status-section {
  padding: 40rpx 0;
  .status-title {
    font-size: 36rpx;
    font-weight: bold;
    color: #333;
  }
  .status-countdown {
    margin-top: 16rpx;
    font-size: 28rpx;
    color: #666;
  }
}

.card {
  background-color: #fff;
  border-radius: 16rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
}

.appointment-info {
  .tag {
    display: inline-block;
    background-color: #fff1f0;
    color: #ff5a5f;
    padding: 4rpx 12rpx;
    border-radius: 8rpx;
    font-size: 24rpx;
    margin-bottom: 24rpx;
  }
  .info-item {
    display: flex;
    justify-content: space-between;
    font-size: 28rpx;
    color: #666;
    margin-bottom: 24rpx;
    &:last-child {
      margin-bottom: 0;
    }
    .value {
      color: #333;
    }
  }
}

.verification-code {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .code-info {
    .label {
      font-size: 28rpx;
      color: #666;
    }
    .code {
      font-size: 40rpx;
      font-weight: bold;
      color: #333;
      margin-top: 16rpx;
    }
  }
  .qrcode {
    width: 120rpx;
    height: 120rpx;
  }
}

.service-details {
  .shop-name {
    font-size: 30rpx;
    font-weight: bold;
    color: #333;
    padding-bottom: 24rpx;
    border-bottom: 1rpx solid #f0f0f0;
  }
  .service-item {
    display: flex;
    padding: 24rpx 0;
    .service-image {
      width: 120rpx;
      height: 120rpx;
      border-radius: 8rpx;
      margin-right: 24rpx;
    }
    .service-info {
      flex: 1;
      .service-name {
        font-size: 28rpx;
        color: #333;
      }
      .service-duration {
        font-size: 24rpx;
        color: #999;
        margin-top: 8rpx;
      }
    }
    .service-price {
      text-align: right;
      font-size: 32rpx;
      color: #333;
      .quantity {
        font-size: 24rpx;
        color: #999;
      }
    }
  }
  .contact-merchant {
    display: flex;
    justify-content: flex-end;
    padding-top: 24rpx;
    border-top: 1rpx solid #f0f0f0;
    :deep(.contact-btn) {
      width: auto !important;
      height: 64rpx !important;
      font-size: 26rpx !important;
      border: 1rpx solid #e0e0e0 !important;
      color: #333 !important;
      background-color: #fff !important;
      padding: 0 24rpx !important;
      .wd-icon {
        color: #ff5a5f !important;
        color: #ff5a5f !important;
        margin-right: 8rpx;
      }
    }
  }
}

.info-card {
  padding: 16rpx 32rpx;
  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16rpx 0;
    font-size: 28rpx;
    .label {
      color: #666;
    }
    .value {
      color: #333;
    }
    .amount-due {
      font-size: 32rpx;
      font-weight: bold;
      color: #ff5a5f;
    }
    .value-light {
      color: #999;
    }
    .value-with-copy {
      display: flex;
      align-items: center;
      gap: 16rpx;
      .copy-btn {
        border: 1rpx solid #e0e0e0;
        color: #333;
        font-size: 24rpx;
        padding: 4rpx 12rpx;
        border-radius: 20rpx;
      }
    }
  }
}

.bottom-actions {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  gap: 24rpx;
  padding: 24rpx 32rpx;
  background-color: #fff;
  border-top: 1rpx solid #f0f0f0;
  padding-bottom: calc(24rpx + constant(safe-area-inset-bottom));
  padding-bottom: calc(24rpx + env(safe-area-inset-bottom));

  :deep(.action-btn) {
    margin: 0 !important;
    width: 200rpx !important;
    height: 80rpx !important;
    border-radius: 40rpx !important;
    font-size: 28rpx !important;
  }

  :deep(.cancel-btn) {
    border: 1rpx solid #ddd !important;
    color: #333 !important;
    background-color: #fff !important;
  }

  :deep(.pay-btn) {
    background-color: #ff5a5f !important;
    border: none !important;
  }
}
</style>
