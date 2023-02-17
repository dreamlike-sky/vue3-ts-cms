// Vuex
/*
import { createStore, Store, useStore as useVuexStore } from 'vuex'
import type { IRootState, IStoreType } from './types'
import login from './login/login'
import system from './main/system/system'
import { getPageListData } from '@/service/main/system/system'
import dashboard from '@/stores/main/analysis/dashboard'

// interface IRootState {
//   name: string
//   age: number
// }

const store = createStore<IStoreType>({
  state() {
    return {
      name: 'Jeck',
      age: 18,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, departmentList: any[]) {
      state.entireDepartment = departmentList
    },
    changeEntireRole(state, roleList: any[]) {
      state.entireRole = roleList
    },
    changeEntireMenu(state, menuList: any[]) {
      state.entireMenu = menuList
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门和角色数据
      const departmentResult = await getPageListData('/department/list', { offset: 0, size: 1000 })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', { offset: 0, size: 1000 })
      const { list: roleList } = roleResult.data

      // 请求全部菜单数据
      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult.data

      // 2.保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  // 不能直接调用
  // store.dispatch('getInitialDataAction')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
*/

// Pinia
import { defineStore } from 'pinia'
import type { IRootState } from './types'
// import loginStore from './login/login'
// import systemStore from './main/system/system'
import { getPageListData } from '@/service/main/system/system'

/*
interface IRootState {
  name: string
  age: number
}
*/

// root为useStore的id
const useStore = defineStore('root', {
  state: (): IRootState => {
    // const loginModule = loginStore()
    // loginModule.loadLocalLogin()
    // const systemModule = systemStore()
    return {
      // name: 'coderwhy',
      // age: 18,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  actions: {
    async getInitialDataAction() {
      // 1.请求部门和角色数据
      const departmentResult = await getPageListData('/department/list', { offset: 0, size: 1000 })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', { offset: 0, size: 1000 })
      const { list: roleList } = roleResult.data

      // 请求全部菜单数据
      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult.data

      // 2.保存数据
      this.changeEntireDepartment(departmentList)
      this.changeEntireRole(roleList)
      this.changeEntireMenu(menuList)
    },
    changeEntireDepartment(departmentList: any[]) {
      this.entireDepartment = departmentList
    },
    changeEntireRole(roleList: any[]) {
      this.entireRole = roleList
    },
    changeEntireMenu(menuList: any[]) {
      this.entireMenu = menuList
    }
  }
})
export default useStore
