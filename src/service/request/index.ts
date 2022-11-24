import axios from 'axios'
// import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { AxiosInstance } from 'axios'
import type { ServiceRequestInterceptors, ServiceRequestConfig } from './type'

import { ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEFAULT_LOADING = true

// axios --> axios instance(实例)
class ServiceRequest {
  // request() {}
  // get() {}
  instance: AxiosInstance
  interceptors?: ServiceRequestInterceptors
  loading?: LoadingInstance
  showLoading: boolean

  // constructor(config: AxiosRequestConfig) {
  constructor(config: ServiceRequestConfig) {
    // 创建 axios 实例
    this.instance = axios.create(config)

    // 保存基本信息
    this.interceptors = config.interceptors
    // 记录 Loading 的状态
    // 判断只有当config.showLoading为 undefined或者null 时才会返回true
    // this.showLoading = config.showLoading ?? true
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    // this.instance.interceptors.request.use()
    // 使用拦截器
    // 1.从 config 中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器：请求成功拦截')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true, // 蒙版
            text: '正在加载...', // 显示文字
            background: 'rgba(0, 0, 0, 0.5)' // 遮盖的背景颜色
          })
        }
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器：请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器：响应成功拦截')

        // 将 loading 移除
        // this.loading?.close()
        // 测试效果
        setTimeout(() => {
          this.loading?.close()
        }, 1000)

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败，显示错误信息')
        } else {
          return data
        }
      },
      (err) => {
        console.log('所有的实例都有的拦截器：响应失败拦截')

        // 例子：判断不同的 httpErrorCode 显示不同的错误信息
        // switch
        if (err.response.status === 404) {
          console.log('404的错误~')
        }

        // 将 loading 移除
        this.loading?.close()

        return err
      }
    )
  }

  // 单独的请求拦截器
  // request(config: AxiosRequestConfig): void {
  // request(config: ServiceRequestConfig): void {
  request<T>(config: ServiceRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求 config 的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 2.判断是否需要显示 Loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          // 2.将showLoading初始化为true，这样不会影响下一个请求
          // this.showLoading = true
          this.showLoading = DEFAULT_LOADING

          // 3.将 resolve 返回出去
          console.log(res)
        })
        .catch((err) => {
          // 将showLoading初始化为true，这样不会影响下一个请求
          // this.showLoading = true
          this.showLoading = DEFAULT_LOADING
          return err
        })
    })
  }

  // 其他的请求
  // get<T>(config: ServiceRequestConfig<T>): Promise<T> {
  //   return this.request<T>({ ...config, method: 'GET' })
  // }
  // post<T>(config: ServiceRequestConfig<T>): Promise<T> {
  //   return this.request<T>({ ...config, method: 'POST' })
  // }
  // delete<T>(config: ServiceRequestConfig<T>): Promise<T> {
  //   return this.request<T>({ ...config, method: 'DELETE' })
  // }
  // patch<T>(config: ServiceRequestConfig<T>): Promise<T> {
  //   return this.request<T>({ ...config, method: 'PATCH' })
  // }
}
export default ServiceRequest
