// Vuex
/*
import { Module } from "vuex"
import type { IDashboardState } from './types'
import { IRootState } from '@/stores/types'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale,
  getAmountGoodsList
} from '@/service/main/analysis/dashboard'


const dashboardModule: Module<IDashboardState, IRootState> = {
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: [],
      amountGoodsList: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    },
    changeAmountGoodsList(state, list) {
      state.amountGoodsList = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()
      // console.log(categoryCountResult)
      commit('changeCategoryGoodsCount', categoryCountResult.data)

      const categorySaleResult = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', categorySaleResult.data)

      const categoryFavorResult = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryFavorResult.data)

      const addressSaleResult = await getAddressGoodsSale()
      commit('changeAddressGoodsSale', addressSaleResult.data)

      const amountListResult = await getAmountGoodsList()
      commit('changeAmountGoodsList', amountListResult.data)
    }
  }
}

export default dashboardModule
*/

// Pinia
import { defineStore } from 'pinia'
import type { IDashboardState } from './types'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale,
  getAmountGoodsList
} from '@/service/main/analysis/dashboard'

const dashboardStore = defineStore('dashboard', {
  state: (): IDashboardState => {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: [],
      amountGoodsList: []
    }
  },
  actions: {
    async getDashboardDataAction() {
      const categoryCountResult: any = await getCategoryGoodsCount()
      // console.log(categoryCountResult)
      this.changeCategoryGoodsCount(categoryCountResult.data)

      const categorySaleResult: any = await getCategoryGoodsSale()
      this.changeCategoryGoodsSale(categorySaleResult.data)

      const categoryFavorResult: any = await getCategoryGoodsFavor()
      this.changeCategoryGoodsFavor(categoryFavorResult.data)

      const addressSaleResult: any = await getAddressGoodsSale()
      this.changeAddressGoodsSale(addressSaleResult.data)

      const amountListResult: any = await getAmountGoodsList()
      this.changeAmountGoodsList(amountListResult.data)
    },
    changeCategoryGoodsCount(list: any[]) {
      this.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(list: any[]) {
      this.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(list: any[]) {
      this.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(list: any[]) {
      this.addressGoodsSale = list
    },
    changeAmountGoodsList(list: any[]) {
      this.amountGoodsList = list
    }
  }
})

export default dashboardStore
