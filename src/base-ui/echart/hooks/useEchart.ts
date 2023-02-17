import * as echarts from 'echarts'
import ChinaMapData from '@/base-ui/echart/data/china.json'

const chinaMap: any = ChinaMapData
echarts.registerMap('china', chinaMap)

export default function (domEl: HTMLElement, theme = 'light') {
  const echartInstance = echarts.init(domEl, theme, { renderer: 'svg' })

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  // 如果有别的触发事件，可以通过调用 setResize 来实现改变图像大小
  // const setResize = () => {
  //   echartInstance.resize()
  // }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions
    // setResize
  }
}
