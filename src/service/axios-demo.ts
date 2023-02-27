// import axios from 'axios'

// axios 的实例对象
// axios.request({
//   method: 'GET'
// })
// 也可以这样写，这两种写法是等价的
// axios.get({})

// 1.模拟 get 请求
// axios.get('http://localhost:3000/moment/1').then((res) => {
//   console.log(res.data)
// })

// 2.get 请求，并且传入参数
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'Jeck',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// 3.post 请求
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'jeck',
//       age: 16
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// Promise 中类型的使用
// Promise 本身是可以有类型的
// new Promise<string>((resolve, reject) => {
//   resolve('abc')
// }).then((res) => {
//   console.log(res.length)
// })

// 4.axios 的配置选项
// 4.1 全局的配置
// (1)解决2.和3.的路由相同导致的重复配置问题
// axios.defaults.baseURL = 'http://httpbin.org/'
// (2)解决请求时间过长无法响应问题(设置超时时长)
// axios.defaults.timeout = 10000
// (3)配置请求头信息
// axios.defaults.headers = {}

// 4.2 每个请求单独的配置
// axios
//   .get('get', {
//     params: {
//       name: 'Jeck',
//       age: 18
//     },
//     timeout: 5000,
//     headers: {}
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
// axios
//   .post('post', {
//     data: {
//       name: 'jeck',
//       age: 16
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// 5. axios.all --> 多个请求，一起返回
// axios
//   .all([
//     axios.get('get', { params: { name: 'Jeck', age: 18 } }),
//     axios.post('post', { params: { name: 'Jeck', age: 18 } })
//   ])
//   .then((res) => {
//     // console.log(res)
//     // console.log(res[0])
//     // console.log(res[1])
//     console.log(res[0].data)
//   })

// 6. axios 的拦截器
// fn1：请求发送成功会执行的函数
// fn2：请求发送失败会执行的函数
// axios.interceptors.request.use(fn1, fn2)
// axios.interceptors.request.use(
//   (config) => {
//     // 可以在这里做一些想做的操作
//     // 1.给请求添加 token
//     // 2.添加 Loading 动画
//     console.log('请求成功的拦截')
//     config.url = ''
//     return config
//   },
//   (err) => {
//     console.log('请求失败的拦截')
//     return err
//   }
// )
// // fn1：响应成功(服务器正常返回数据 2xx)
// // fn2：响应失败(服务器返回数据异常 4xx 5xx)
// axios.interceptors.response.use(
//   (res) => {
//     console.log('响应成功的拦截')
//     return res
//   },
//   (err) => {
//     console.log('响应失败的拦截')
//     return err
//   }
// )
