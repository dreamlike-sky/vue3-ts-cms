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
// const TIME_OUT = 10000
// if (process.env.NODE_ENV === 'development') {
// if (import.meta.env.VITE_BASE_NAME === 'development') {
//   BASE_URL = 'http://152.136.185.210:5000/'
//   BASE_NAME = 'DEVELOPMENT'
// } else if (process.env.NODE_ENV === 'production') {
// } else if (import.meta.env.VITE_BASE_NAME === 'production') {
//   BASE_URL = 'http://152.136.185.210:5000/'
//   BASE_NAME = 'PRODUCTION'
// } else {
//   BASE_URL = 'http://152.136.185.210:5000/'
//   BASE_NAME = 'TEST'
// }
// export { BASE_URL, TIME_OUT }
// export BASE_URL // 这种写法是报错的
// 或者可以这样写，在定义的时候就直接导出
// export const TIME_OUT = 10000

// 3.根据配置文件 .env 来区分
// Vite 项目需要将 process.env 更换为 import.meta.env
export const BASE_URL = import.meta.env.VITE_BASE_URL
export const TIME_OUT = 10000
