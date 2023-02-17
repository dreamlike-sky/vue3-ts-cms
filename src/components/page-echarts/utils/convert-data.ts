import { coordinateData } from './coordinate-data'

export const convertData = function (data: any) {
  const res = []
  for (let i = 0; i < data.length; i++) {
    // 通过后台数据中城市名称来获取地图城市坐标数据中对应城市的坐标数据
    const geoCoord = coordinateData[data[i].name]
    // 判断是否有坐标
    if (geoCoord) {
      // 将有坐标的城市名称作为新对象中的 name
      // 将有坐标的城市坐标数据合并对应的销量数据作为新对象的 value
      // 将新对象 push 到空数组
      res.push({
        name: data[i].name,
        // concat() 合并多个字符串
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  // res = [{name: '杭州', value: [120.19, 30.26, 19654]}, {...}, ..., {...}]
  return res
}
