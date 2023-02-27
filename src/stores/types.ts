// Vuex
/*
import type { ILoginState } from './login/types'
import type { ISystemState } from './main/system/types'
import type { I }

export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
}

export interface IRootWithLogin {
  login: ILoginState
  system: ISystemState
}

// 合并数据类型
export type IStoreType = IRootState & IRootWithLogin
*/

// Pinia
export interface IRootState {
  name: string
  // age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}
