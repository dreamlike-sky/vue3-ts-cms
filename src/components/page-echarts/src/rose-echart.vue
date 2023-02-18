<script lang="ts" setup>
import { computed } from 'vue'
import BaseEchart from '@/base-ui/echart'
import type { IDataType } from '@/components/page-echarts/types'

const props = defineProps<{
  roseData: IDataType[]
}>()

// echart 默认颜色
/*
'#ee6666',
'#fc8452',
'#fac858',
'#3ba272',
'#91cc75',
'#5470c6',
'#73c0de',
'#9a60b4',
'#ea7ccc'
*/
const options: any = computed(() => {
  return {
    legend: { top: 'bottom' },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: {
          show: true,
          readOnly: false,
          title: '数据视图',
          lang: ['数据视图', '关闭', '刷新']
        },
        restore: { show: true, title: '还原' },
        saveAsImage: { show: true, title: '保存为图片' }
      }
    },
    tooltip: { trigger: 'item' },
    series: [
      {
        name: '商品数量',
        type: 'pie',
        radius: [10, 160],
        center: ['50%', '50%'],
        roseType: 'area',
        // itemStyle: {  },
        /*
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' }
        ]
        */
        data: props.roseData,
        label: { show: false },
        // labelLine: { length: 5, length2: 5, minTurnAngle: 30 },
        itemStyle: {
          borderRadius: 8,
          color: function (colors: { dataIndex: number }) {
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
  <div class="rose-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<style scoped lang="less"></style>
