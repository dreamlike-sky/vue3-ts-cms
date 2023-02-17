import type { RouteRecordRaw } from 'vue-router'
import type { IBreadcrumb } from '@/base-ui/breadcrumb'

let fistMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先加载默认有所的 routes
  const allRoutes: RouteRecordRaw[] = []
  // require是webpack的API，TS并不支持
  // const routeFiles = require.context('../router/main', true, /\.ts/)
  // routeFiles.keys().forEach((key) => {
  //   console.log(key)
  //   const route = require('../router/main' + key.split('.')[1])
  //   allRoutes.push(route.default)
  //   console.log(allRoutes)
  // })
  const routeFiles = import.meta.glob('../router/main/**/*.ts', { eager: true })
  Object.values(routeFiles).forEach((key: any) => {
    allRoutes.push(key.default)
    // console.log(allRoutes)
  })

  // 2.根据菜单获取需要的 routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!fistMenu) {
          fistMenu = menu
        }
      } else {
        // menu.type === 1
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}

// 匹配菜单
/*
export function pathMapToMenu(userMenus: any[], currentPath: string): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      // console.log(findMenu)
      if (findMenu) {
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      // console.log(menu)
      return menu
    }
  }
}
*/

// 匹配的菜单名称和路径作为面包屑的名称和路径
/*
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      // console.log(findMenu)
      if (findMenu) {
        breadcrumbs.push({ name: menu.name, path: menu.url })
        breadcrumbs.push({ name: findMenu.name, path: findMenu.url })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      // console.log(menu)
      return menu
    }
  }
  return breadcrumbs
}
*/

// 合并pathMapBreadcrumbs和pathMapToMenu函数
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[] // +
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      // console.log(findMenu)
      if (findMenu) {
        // 没有跳转可以不要
        // breadcrumbs?.push({ name: menu.name, path: menu.url }) // +
        breadcrumbs?.push({ name: menu.name }) // +
        // breadcrumbs?.push({ name: findMenu.name, path: findMenu.url }) // +
        breadcrumbs?.push({ name: findMenu.name }) // +
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      // console.log(menu)
      return menu
    }
  }
}
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

// 获取用户按钮权限的数据
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []
  const _recurseGetPermission = (menus: any[]) => {
    // 遍历菜单的每个层级，直到遍历到第三层，添加权限到 permissions
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)
  return permissions
}

// 获取叶子节点
export function menuMapLeafKeys(menuList: any[]) {
  const leafKeys: number[] = []
  const _recurseGetLeaf = (menuList: any) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)
  return leafKeys
}

export { fistMenu }
