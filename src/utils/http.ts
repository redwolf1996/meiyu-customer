import { useCustomerStore } from '@/stores/modules/customer'

const baseUrl = import.meta.env.VITE_BASE_URL
const envVersion = import.meta.env.VITE_ENV_VERSION
const customerStore = useCustomerStore()

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    const urls = [
      'https://file-univtskclp-mp-273ffd5c-a76e-4c77-8584-ad265ebe1b0b.oss-cn-zhangjiakou.aliyuncs.com',
      'https://api.next.bspapp.com/client',
    ]

    if (!urls.includes(options.url) && !options.url.includes('https://apis.map.qq.com/ws/geocoder/v1')) {
      options.url = baseUrl + options.url
    }
    options.timeout = 30000
    options.header = {
      ...options?.header,
      'envVersion': envVersion,
      'C-Store-Id': customerStoreId.value || customerStore.customerInfo?.lastStoreId,
    }
    const token = customerStore.customerInfo?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
  code: number
  msg: string
  data: T
}
export function http<T>(options: UniApp.RequestOptions) {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        const statusCode = res.statusCode
        if (statusCode >= 200 && statusCode < 300) {
          const data = res.data as Data<T>
          if (data.code !== 200) {
            uni.showToast({
              icon: 'none',
              title: data.code === 500 ? '服务端错误' : (res.data as Data<T>).msg,
              duration: 2000,
            })
            if ([20001, 20002, 20005, 10002].includes(data.code)) { // 需要重新登录的错误码
              setTimeout(() => {
                // 获取当前页面路径，用于登录后跳转回来
                const pages = getCurrentPages()
                const currentPage = pages[pages.length - 1]
                if (currentPage) {
                  const route = currentPage.route
                  const options = (currentPage as any).options || {}
                  // 构造完整的页面路径（包含参数）
                  let fullPath = `/${route}`
                  const queryString = Object.keys(options)
                    .map(key => `${key}=${options[key]}`)
                    .join('&')
                  if (queryString) {
                    fullPath += `?${queryString}`
                  }
                  // 保存重定向路径，但排除登录相关页面
                  if (!fullPath.includes('/pages/login/') && !fullPath.includes('/pagesA/login/')) {
                    customerStore.setRedirectPath(fullPath)
                  }
                }

                customerStore.clearCustomerInfo()
                uni.navigateTo({ url: '/pages/login/index' })
              }, 1000)
            }
            return reject(res)
          }
          resolve(data)
        }
        else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
            duration: 2000,
          })
          return reject(res)
        }
      },
      fail(err) {
        uni.showToast({ icon: 'none', title: '网络错误', duration: 2000 })
        reject(err)
      },
    })
  })
}
