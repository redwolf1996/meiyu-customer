import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'

export default defineManifestConfig({
  'name': 'yau',
  'appid': '__UNI__401176F',
  'description': '',
  'versionName': '1.0.0',
  'versionCode': '100',
  'transformPx': false,
  // 'h5': {
  //   router: {
  //     base: '/myh5/',
  //   },
  // },
  'mp-weixin': {
    appid: 'wx208ed5b60f57b9bc',
    setting: { urlCheck: false },
    usingComponents: true,
    optimization: {
      subPackages: true,
    },
  },
  'uniStatistics': {
    enable: false,
  },
  'permission': {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序中位置接口的效果展示',
    },
  },
  'vueVersion': '3',
})
