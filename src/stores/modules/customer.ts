import { defineStore } from 'pinia'

export const useCustomerStore = defineStore(
  'customer',
  () => {
    const customerInfo = ref<any>({
    })

    function setCustomerInfo(val: any) {
      customerInfo.value = val
    }
    function clearCustomerInfo() {
      customerInfo.value = {}
    }

    return {
      customerInfo,
      setCustomerInfo,
      clearCustomerInfo,
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
