import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// ?：表示可选的     ?.：表示可选链
// T = AxiosResponse：表示设置AxiosResponse为默认类型
export interface ServiceRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  // responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// extends：继承至
// 让 继承的类型(AxiosRequestConfig) 成为 自己的类型(ServiceRequestConfig)
// 然后用 自己的类型(ServiceRequestConfig) 扩展一个 interceptors类型(requestInterceptor)
export interface ServiceRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ServiceRequestInterceptors<T>
  showLoading?: boolean
  headers?: any
}
