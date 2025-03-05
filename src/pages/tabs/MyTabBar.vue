<script lang="ts" setup>
const props = withDefaults(defineProps<{
  tabIndex?: number // 展示第几个tab
  placeholder?: boolean // 底部是否占位
  fixed?: boolean
}>(), {
  tabIndex: 1,
  placeholder: true,
  fixed: true,
})
const tabbar = ref(props.tabIndex)
const tabUrls: NavigateToOptions['url'][] = [
  '/pages/tabs/tab-home',
  '/pages/tabs/tab-my',
]

function changeBar(index: number) {
  uni.redirectTo({ url: tabUrls[index], animationType: 'none' })
}
</script>

<template>
  <uv-tabbar
    :zIndex="99999"
    :value="tabbar" active-color="#1A66FF" inactive-color="#A7A8AC"
    @change="changeBar"
  >
    <uv-tabbar-item text="首页">
      <template #active-icon>
        <image class="icon" src="./icons/icon-tab-dashboard-act.png" />
      </template>
      <template #inactive-icon>
        <image class="icon" src="./icons/icon-tab-dashboard.png" />
      </template>
    </uv-tabbar-item>
    <uv-tabbar-item text="我的">
      <template #active-icon>
        <image class="icon" src="./icons/icon-tab-my-act.png" />
      </template>
      <template #inactive-icon>
        <image class="icon" src="./icons/icon-tab-my.png" />
      </template>
    </uv-tabbar-item>
  </uv-tabbar>
</template>

<style lang='scss' scoped>
.icon {
  width: 40rpx;
  height: 40rpx;
}
</style>
