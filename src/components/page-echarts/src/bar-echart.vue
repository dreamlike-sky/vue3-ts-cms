<script lang="ts" setup>
import { computed } from 'vue'
import * as echarts from 'echarts'
import baseEchart from '@/base-ui/echart'

const props = defineProps<{
  title?: string
  xLabels: string[]
  values: any[]
}>()

const options = computed(() => {
  return {
    title: { text: props.title },
    tooltip: { trigger: 'item' },
    xAxis: {
      data: props.xLabels,
      axisLabel: { inside: true, color: '#fff' },
      axisTick: { show: false },
      axisLine: { show: false },
      z: 10
    },
    yAxis: {
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#999' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '8%',
      containLabel: true
    },
    dataZoom: [{ type: 'inside' }],
    series: [
      {
        name: '收藏数量',
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(103,224,227,1)' },
            { offset: 0.5, color: 'rgba(50,197,233,1)' },
            { offset: 1, color: 'rgba(55,162,218,1)' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(55,162,218,1)' },
              { offset: 0.7, color: 'rgba(50,197,233,1)' },
              { offset: 1, color: 'rgba(103,224,227,1)' }
            ])
          }
        },
        data: props.values
      }
    ]
  }
})
</script>

<template>
  <div class="bar-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<style scoped lang="less"></style>
