// service统一出口
import ServiceRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const serviceRequest = new ServiceRequest({
  // baseURL: '地址1'
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      // const token = ''
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }

      console.log('实例请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('实例请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('实例响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('实例响应失败的拦截')
      return err
    }
  }
})

// 每个实例可以有不同的拦截器，所以可把拦截器写成可选的 --> ?.(可选链)
// export const serviceRequest2 = new ServiceRequest({
//   // baseURL: '地址2'
//   interceptors: {
//     requestInterceptor: (config) => {
//       return config
//     },
//     requestInterceptorCatch: (err) => {
//       return err
//     },
//     responseInterceptor: (res) => {
//       return res
//     },
//     responseInterceptorCatch: (err) => {
//       return err
//     }
//   }
// })

export default serviceRequest
