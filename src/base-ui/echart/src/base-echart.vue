<script lang="ts" setup>
// import * as echarts from 'echarts'
// 新版本无需主动导入 defineProps 便可以直接使用
// import { defineProps } from 'vue'
import { ref, onMounted, withDefaults, watchEffect } from 'vue'
import type { EChartsOption } from 'echarts'
import useEchart from '@/base-ui/echart/hooks/useEchart'

// 定义 props
// JavaScript 的写法
/*
defineProps({
  width: string,
  height: string
})
*/
// TypeScript 的写法
/*
interface Props {
  options: EChartsOption
  // 小写！！！
  width?: string
  height?: string
}
const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '360px'
})
*/
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    // 小写！！
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

const echartDivRef = ref<HTMLElement>()
// 当元素挂载完成后执行
onMounted(() => {
  // 逻辑抽取
  // const echartInstance = echarts.init(echartDivRef.value!)
  // 抽取 option
  /*
  const option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: { trigger: 'item' },
    legend: { orient: 'vertical', left: 'left' },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  echartInstance.setOption(option)
  */
  // echartInstance.setOption(props.option)

  const { setOptions } = useEchart(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<style scoped lang="less"></style>
