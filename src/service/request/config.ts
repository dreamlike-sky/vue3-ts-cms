// 1.手动修改不同的环境（不推荐）
// const BASE_URL = 'http://baidu.com/dev'
// const BASE_NAME = 'http://baidu.com/dev/index'

// const BASE_URL = 'http://baidu.com/prod'
// const BASE_NAME = 'http://baidu.com/prod/index'

// const BASE_URL = 'http://baidu.com/test'
// const BASE_NAME = 'http://baidu.com/test/index'

// 2.根据 process.env.NODE_ENV 的值进行区分
// 开发环境：development
// 生产环境：production
// 测试环境：test
// let BASE_URL = ''
// let BASE_NAME = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://baidu.com/dev'
//   BASE_NAME = 'DEVELOPMENT'
// } else if (process.env.NODE_ENV === 'production') {
//   BASE_URL = 'http://baidu.com/prod'
//   BASE_NAME = 'PRODUCTION'
// } else {
//   BASE_URL = 'http://baidu.com/test'
//   BASE_NAME = 'TEST'
// }
// export { BASE_URL, BASE_NAME }
// export BASE_URL // 这种写法是报错的
// export BASE_NAME // 这种写法是报错的
// 或者可以这样写，在定义的时候就直接导出
// export const BASE_NAME = ''

let BASE_URL = ''
const TIME_OUT = 10000
if (process.env.NODE_ENV === 'development') {
  // BASE_URL = 'http://httpbin.org/get'
  // BASE_URL = 'http://localhost:3000'
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  // BASE_URL = 'http://baidu.com/prod'
  BASE_URL = '/api'
} else {
  // BASE_URL = 'http://baidu.com/test'
  BASE_URL = '/api'
}
export { BASE_URL, TIME_OUT }
