<script lang="ts" setup>
import { computed } from 'vue'
import baseEchart from '@/base-ui/echart'
// import type { EChartsOption } from 'echarts'
import type { IDataType } from '@/components/page-echarts/types'

const props = defineProps<{
  pieData: IDataType[]
}>()

// const options: EChartsOption = {
const options = computed(() => {
  return {
    /*
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    */
    tooltip: { trigger: 'item' },
    legend: { orient: 'horizontal', left: 'left' },
    series: [
      {
        name: '商品数量',
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        // 使用动态数据
        /*
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        */
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        itemStyle: {
          color: function (colors: { dataIndex: any }) {
            var colorList = [
              'rgba(55,162,218,1)',
              'rgba(50,197,233,1)',
              'rgba(103,224,227,1)',
              'rgba(159,230,184,1)',
              'rgba(255,219,92,1)',
              'rgba(255,159,127,1)',
              'rgba(251,114,147,1)'
              // '#E690D1',
              // 'rgba(224,98,174,1)',
              // '#ee6666',
              // '#e7bcf3'
            ]
            return colorList[colors.dataIndex]
          }
        }
      }
    ]
  }
})
</script>

<template>
  <div class="pie-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<style scoped lang="less"></style>
