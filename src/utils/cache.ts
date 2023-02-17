class LocalCache {
  // 本地缓存
  // setCache(key: string, value: any, isLocalStorage: boolean) {
  setCache(key: string, value: any) {
    // any(string/obj/array/...) --> string
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    // obj --> string --> obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
