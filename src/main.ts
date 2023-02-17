import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'

// Element组件
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css' // 不需要另外导入组件样式，会导致样式重复问题
// 国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// Element图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import router from './router'
// import './service/axios-demo'
// import serviceRequest from './service'
// import store, { setupStore } from './stores' // Vuex
// import loadLocalLogin from './stores' // Pinia
import loginStore from './stores/login/login' // Pinia

// 导入全局函数
import { globalProperties } from './global'

const pinia = createPinia()
const app = createApp(App)

// 国际化
app.use(ElementPlus, { locale: zhCn })
// Element图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 调用全局函数
app.use(globalProperties)

// app.use(store) // Vuex
// setupStore() // Vuex
app.use(pinia)
// loadLocalLogin() // Pinia
const loginModule = loginStore() // Pinia
loginModule.loadLocalLogin() // Pinia
app.use(router)

// 封装全局函数(官方建议谨慎使用)
// 抽无为单独的模块
/*
app.config.globalProperties.$filters = {
  foo() {
    console.log('foo')
  },
  formatTime(value: string) {
    return '2023-1-2 00:57:58'
  }
}
*/

app.mount('#app')

/*
console.log(import.meta.env.VITE_BASE_URL)
console.log(import.meta.env.VITE_BASE_NAME)
console.log(import.meta.url)
*/

/*
interface DataType {
  data: any
  returnCode: string
  success: boolean
}
*/
/*
serviceRequest
  .request<DataType>({
    url: 'moment/1',
    method: 'GET',
    showLoading: true,
    interceptors: {
      requestInterceptor: (config) => {
        // console.log('单独请求的config')
        return config
      },
      responseInterceptor: (res) => {
        // console.log('单独响应的response')
        return res
      }
    }
  })
  .then((res) => {
    // console.log(res.data)
    // console.log(res.returnCode)
    // console.log(res.success)
  })
*/
/*
serviceRequest
  .get<DataType>({
    url: 'moment/1',
    showLoading: true
  })
  .then((res) => {})
*/
