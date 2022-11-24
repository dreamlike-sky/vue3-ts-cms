import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import './assets/main.css'

// Element组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// Element图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'
// import './service/axios-demo'
import serviceRequest from './service'

const app = createApp(App)
const store = createPinia()
app.use(router)
app.use(store)

// Element组件
app.use(ElementPlus, { locale: zhCn })
// Element图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')

// console.log(import.meta.env.VITE_BASE_URL)
// console.log(import.meta.env.VITE_BASE_NAME)
// console.log(import.meta.url)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

serviceRequest
  .request<DataType>({
    url: 'moment/1',
    method: 'GET',
    showLoading: true,
    interceptors: {
      requestInterceptor: (config) => {
        console.log('单独请求的config')
        return config
      },
      responseInterceptor: (res) => {
        console.log('单独响应的response')
        return res
      }
    }
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
// serviceRequest
//   .get<DataType>({
//     url: 'moment/1',
//     showLoading: true
//   })
//   .then((res) => {})
