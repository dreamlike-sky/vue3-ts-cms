// Vuex
/*
import { Module } from 'vuex
import type { IRootState } from '../types'
import type { ILoginState } from './types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import type { IAccount } from '@/service/login/types'
import localCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'

// interface ILoginState {
//   token: string
//   userInfo: any
// }

// Module<S, R>：S是指模块中的state类型，R是指根store中的state类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // userMenus --> routes
      const routes = mapMenusToRoutes(userMenus)
      // console.log(routes)

      // 将 routes --> router.main.chidren
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 获取用户按钮的权限的数据
      const permissions = mapMenusToPermissions(userMenus)
      // console.log(permissions)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // console.log('执行accountLoginAction', payload)
      // 1.实现登录逻辑(获取token进行登录权限验证)
      const loginResult = await accountLoginRequest(payload)
      // console.log(loginResult)
      // console.log(loginResult.data.id, loginResult.data.token)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 发送初始化请求(请求完整的 role/department)
      dispatch('getInitialDataAction', null, { root: true })

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      // console.log(userInfoResult)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      // console.log(userMenus)
      commit('changeMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4.跳转到首页
      router.push('/main')
    }),
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('执行phoneLoginAction', payload)
    // })

    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)

        // 发送初始化请求(请求完整的 role/department)
        dispatch('getInitialDataAction', null, { root: true })
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
*/

// Pinia
import { defineStore } from 'pinia'
import type { ILoginState } from './types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import type { IAccount } from '@/service/login/types'
import localCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'
import useStore from '@/stores'

/*
interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}
*/

const loginStore = defineStore('login', {
  state: (): ILoginState => {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  actions: {
    async accountLoginAction(payload: IAccount) {
      // console.log('执行accountLoginAction', payload)
      // 1.实现登录逻辑(获取token进行登录权限验证)
      const loginResult = await accountLoginRequest(payload)
      // console.log(loginResult)
      // console.log(loginResult.data.id, loginResult.data.token)
      const { id, token } = loginResult.data
      this.changeToken(token)
      localCache.setCache('token', token)

      // 发送初始化请求(请求完整的 role/department)
      const store = useStore()
      store.getInitialDataAction()

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      // console.log(userInfoResult)
      const userInfo = userInfoResult.data
      this.changeUserInfo(userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      // console.log(userMenus)
      this.changeMenus(userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4.跳转到首页
      router.push('/main')
    },
    // phoneLoginAction(payload: any) {
    //   console.log('执行phoneLoginAction', payload)
    // }

    loadLocalLogin() {
      const token = localCache.getCache('token')
      if (token) {
        this.changeToken(token)

        // 发送初始化请求(请求完整的 role/department)
        const store = useStore()
        store.getInitialDataAction()
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        this.changeUserInfo(userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        this.changeMenus(userMenus)
      }
    },

    // 改变token：'' --> 'xxxxx'
    changeToken(token: string) {
      // console.log(token)
      this.token = token
    },
    changeUserInfo(userInfo: any) {
      this.userInfo = userInfo
    },
    changeMenus(userMenus: any) {
      this.userMenus = userMenus

      // userMenus --> routes
      const routes = mapMenusToRoutes(userMenus)
      // console.log(routes)

      // 将 routes --> router.main.chidren
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 获取用户按钮的权限的数据
      const permissions = mapMenusToPermissions(userMenus)
      // console.log(permissions)
      this.permissions = permissions
    }
  }
})
export default loginStore
