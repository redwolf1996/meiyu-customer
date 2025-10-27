import { defineStore } from 'pinia'

export const useCustomerStore = defineStore(
  'customer',
  () => {
    const customerInfo = ref<any>({
    })

    // 保存重新登录前的页面路径，用于登录后跳转回原页面
    const redirectPath = ref<string>('')

    function setCustomerInfo(val: any) {
      customerInfo.value = val
    }
    function clearCustomerInfo() {
      customerInfo.value = {}
    }

    function setRedirectPath(path: string) {
      redirectPath.value = path
    }

    function clearRedirectPath() {
      redirectPath.value = ''
    }

    return {
      customerInfo,
      redirectPath,
      setCustomerInfo,
      clearCustomerInfo,
      setRedirectPath,
      clearRedirectPath,
    }
  },
  {
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
