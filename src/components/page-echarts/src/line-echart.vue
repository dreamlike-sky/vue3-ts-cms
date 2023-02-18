<script lang="ts" setup>
import { computed } from 'vue'
import BaseEchart from '@/base-ui/echart'

const props = defineProps<{
  title?: string
  xLabels: string[]
  values: any[]
}>()
/*
const option = {
  title: { text: 'Stacked Area Chart' },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: { backgroundColor: '#6a7985' }
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [{ type: 'value' }],
  series: [
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      label: { show: true, position: 'top' },
      areaStyle: {},
      emphasis: { focus: 'series' },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}
*/
const options: any = computed(() => {
  return {
    title: { text: props.title },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: { backgroundColor: '#6a7985' }
      }
    },
    legend: {
      itemStyle: { color: 'rgba(55,162,218,1)' },
      lineStyle: { color: 'rgba(50,197,233,1)' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.xLabels
      }
    ],
    yAxis: [{ type: 'value' }],
    series: [
      {
        name: '商品销量',
        type: 'line',
        stack: 'Total',
        label: { show: true, position: 'top' },
        areaStyle: { color: 'rgba(159,230,184,1)' },
        itemStyle: { color: 'rgba(55,162,218,1)' },
        lineStyle: { color: 'rgba(50,197,233,1)' },
        emphasis: { focus: 'series' },
        data: props.values
      }
    ]
  }
})
</script>
<template>
  <div class="line-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>
<style scoped lang="less"></style>
