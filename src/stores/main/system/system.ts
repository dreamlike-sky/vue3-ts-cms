// Vuex
/*
import { Module } from 'vuex'
import { ISystemStore } from './types'
import { IRootState } from '@/stores/types'
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

// const pageUrlMap = {
//   users: '/api/users/abc/list'
// }

const systemModule: Module<ISystemStore, IRootState> = {
  namespaced: true, // 命名空间
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        // 优化
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }

        // const listData: any[] = (state as any)[`${pageName}List`] ?? []
        // return listData
        return (state as any)[`${pageName}List`]
      }
    },
    pageCountData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    },
    changeDepartmentList(state, departmentList: any[]) {
      state.departmentList = departmentList
    },
    changeDepartmentCount(state, departmentCount: number) {
      state.departmentCount = departmentCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // console.log(payload)
      // 拿到 payload.pageUrl 和 payload.queryInfo 后就可以发送请求

      // 1.对页面发送请求
      // const pageResult = await getPageListData(payload.pageUrl, payload.queryInfo)
      // console.log(pageResult)
      // const { list, totalCount } = pageResult.data
      // commit('changeUsersList', list)
      // commit('changeUsersCount', totalCount)

      // 1.获取pageUrl
      const pageName = payload.pageName
      // let pageUrl = pageUrlMap[pageName]
      // 优化
      // let pageUrl = ''
      // switch (pageName) {
      //   case 'users':
      //     pageUrl = '/users/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      // }
      const pageUrl = `/${pageName}/list`

      // 2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      // commit('changeUsersList', list)
      // commit('changeUsersCount', totalCount)
      // 优化
      // switch (pageName) {
      //   case 'users':
      //     commit('changeUsersList', list)
      //     commit('changeUsersCount', totalCount)
      //     break
      //   case 'role':
      //     commit('changeRoleList', list)
      //     commit('changeRoleCount', totalCount)
      //     break
      // }
      const changePageName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      // 1.获取 pageName 和 id
      // pageName --> /users
      // id --> /users/id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      // 2.对页面发送请求
      await deletePageData(pageUrl)

      // 3.重新请求最新的数据
      dispatch('getPageListAction') {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      }
    },
    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      // 新建用户的请求
      await createPageData(pageUrl, newData)
      // 请求最新的数据
      dispatch('getPageListAction') {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      // 修改数据的请求
      await editPageData(pageUrl, editData)
      // 请求最新的数据
      dispatch('getPageListAction') {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
*/

// Pinia
import { defineStore } from 'pinia'
import type { ISystemState } from './types'
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

// const pageUrlMap = {
//   users: '/api/users/abc/list'
// }

const systemStore = defineStore('mainSystem', {
  state: (): ISystemState => {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
      categoryList: [],
      categoryCount: 0,
      storyList: [],
      storyCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        // 优化
        /*
        switch (pageName) {
          case 'users':
            return state.usersList
          case 'role':
            return state.roleList
        }
        */
        // const usersListData: any[] = (state as any)[`${pageName}List`] ?? []
        // return usersListData
        return (state as any)[`${pageName}List`]
      }
    },
    pageCountData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction(payload: any) {
      /*
      // console.log(payload)
      // 拿到 payload.pageUrl 和 payload.queryInfo 后就可以发送请求

      // 1.对页面发送请求
      const pageResult = await getPageListData(payload.pageUrl, payload.queryInfo)
      // console.log(pageResult)
      const { list, totalCount } = pageResult.data
      this.changeUserList(list)
      this.changeUserCount(totalCount)
      */

      // 1.获取pageUrl
      const pageName = payload.pageName
      // let pageUrl = pageUrlMap[pageName]
      // 优化
      /*
      let pageUrl = ''
      switch (pageName) {
        case 'users':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
      }
      */
      const pageUrl = `/${pageName}/list`

      // 2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      // this.changeUserList(list)
      // this.changeUserCount(totalCount)
      switch (pageName) {
        case 'users':
          this.changeUsersList(list)
          this.changeUsersCount(totalCount)
          break
        case 'role':
          this.changeRoleList(list)
          this.changeRoleCount(totalCount)
          break
        case 'goods':
          this.changeGoodsList(list)
          this.changeGoodsCount(totalCount)
          break
        case 'menu':
          this.changeMenuList(list)
          this.changeMenuCount(totalCount)
          break
        case 'department':
          this.changeDepartmentList(list)
          this.changeDepartmentCount(totalCount)
          break
        case 'category':
          this.changeCategoryList(list)
          this.changeCategoryCount(totalCount)
          break
        case 'story':
          this.changeStoryList(list)
          this.changeStoryCount(totalCount)
          break
      }
    },
    async deletePageDataAction(payload: any) {
      // 1.获取 pageName 和 id
      // pageName --> /users
      // id --> /users/id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      // 2.对页面发送请求
      await deletePageData(pageUrl)

      // 3.重新请求最新的数据
      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction(payload: any) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      // 新建用户的请求
      await createPageData(pageUrl, newData)
      // 请求最新的数据
      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction(payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      // 修改数据的请求
      await editPageData(pageUrl, editData)
      // 请求最新的数据
      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    changeUsersList(usersList: any[]) {
      this.usersList = usersList
    },
    changeUsersCount(usersCount: number) {
      this.usersCount = usersCount
    },
    changeRoleList(roleList: any[]) {
      this.roleList = roleList
    },
    changeRoleCount(roleCount: number) {
      this.roleCount = roleCount
    },
    changeGoodsList(goodsList: any[]) {
      this.goodsList = goodsList
    },
    changeGoodsCount(goodsCount: number) {
      this.goodsCount = goodsCount
    },
    changeMenuList(menuList: any[]) {
      this.menuList = menuList
    },
    changeMenuCount(menuCount: number) {
      this.menuCount = menuCount
    },
    changeDepartmentList(departmentList: any[]) {
      this.departmentList = departmentList
    },
    changeDepartmentCount(departmentCount: number) {
      this.departmentCount = departmentCount
    },
    changeCategoryList(categoryList: any[]) {
      this.categoryList = categoryList
    },
    changeCategoryCount(categoryCount: number) {
      this.categoryCount = categoryCount
    },
    changeStoryList(storyList: any[]) {
      this.storyList = storyList
    },
    changeStoryCount(storyCount: number) {
      this.storyCount = storyCount
    }
  }
})

export default systemStore
