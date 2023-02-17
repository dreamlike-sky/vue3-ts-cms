// 模块声明
// Vuex
/*
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare let $store: any
declare module '*.json'
*/
export {}
declare module 'vue' {
  interface ComponentCustomProperties {
    $filters: any
  }
}
