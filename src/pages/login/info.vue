<route lang="yaml">
style:
  navigationBarTitleText: 完善登录信息
</route>

<script lang="ts" setup>
import { useCustomerStore } from '@/stores/modules/customer'

const customerStore = useCustomerStore()
const form = reactive<{
  name: string
  phone: string
}>({
  name: '',
  phone: '',
})

const formRef = ref()
function handleSubmit() {
  formRef.value
    .validate()
    .then(async ({ valid }) => {
      if (valid) {
        await request.post<any>('/customer/info', form)
        const originInfo = customerStore.customerInfo
        customerStore.setCustomerInfo({
          ...originInfo,
          name: form.name,
          phone: form.phone,
        })
        uni.redirectTo({ url: '/pages/login/index' })
      }
    })
    .catch((error) => {
      console.error(error)
    })
}
</script>

<template>
  <view h-10px />
  <wd-form ref="formRef" :model="form">
    <wd-cell-group :border="true">
      <wd-input
        v-model="form.name"
        label="姓名"
        prop="name"
        placeholder="请输入"
        suffix-icon="arrow-right"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <wd-input
        v-model="form.phone"
        label="手机号"
        prop="phone"
        placeholder="请输入"
        suffix-icon="arrow-right"
        type="number"
        :maxlength="11"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
    </wd-cell-group>
    <view px-20px pt-80px>
      <view f14 color-F7CD24>
        姓名填写须知
      </view>
      <view pt-10px f12 color-333>
        <text fb>
          姓名：
        </text>建议填写商家熟知的姓名，方便商家进行服务
      </view>
      <view pt-10px f12 color-333>
        <text fb>
          手机号：
        </text>请填写真实手机号，方便商家联系到你
      </view>
    </view>
    <view p-20px>
      <wd-button
        custom-class="theme-bg"
        :round="false" type="primary" size="large" :block="true"
        @click="handleSubmit"
      >
        保存
      </wd-button>
    </view>
  </wd-form>
</template>
