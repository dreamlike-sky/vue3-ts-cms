import serviceRequest from '../../index'
import type { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return serviceRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return serviceRequest.delete<IDataType>({
    // url: /users/id
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return serviceRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return serviceRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
