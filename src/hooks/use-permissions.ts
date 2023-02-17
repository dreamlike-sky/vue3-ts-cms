// Vuex
/*
import { useStore } from '@/stores'

export function usePremissions(pageName: string, hanldeName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${hanldeName}`
  // return !!permissions.find((item) => item === verifyPermission)
  return Boolean(permissions.find((item) => item === verifyPermission))
}
*/

// Pinia
import loginStore from '@/stores/login/login'

export function usePremissions(pageName: string, hanldeName: string) {
  const store = loginStore()
  const permissions = store.$state.permissions
  const verifyPermission = `system:${pageName}:${hanldeName}`
  // 转成布尔值
  // 方法一：!! --> 双重取反
  return !!permissions.find((item) => item === verifyPermission)
  // 方法二：Boolean()
  // return Boolean(permissions.find((item) => item === verifyPermission))
}
