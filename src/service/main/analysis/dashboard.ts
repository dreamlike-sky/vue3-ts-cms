import serviceRequest from '@/service'

// 枚举
enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsSaleFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale',
  amountGoodsList = '/goods/amount/list'
}

export function getCategoryGoodsCount() {
  return serviceRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return serviceRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return serviceRequest.get({
    url: DashboardAPI.categoryGoodsSaleFavor
  })
}

export function getAddressGoodsSale() {
  return serviceRequest.get({
    url: DashboardAPI.addressGoodsSale
  })
}

export function getAmountGoodsList() {
  return serviceRequest.get({
    url: DashboardAPI.amountGoodsList
  })
}
