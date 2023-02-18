<script lang="ts" setup>
import { computed } from 'vue'
import BaseEchart from '@/base-ui/echart'
import type { IDataType } from '@/components/page-echarts/types'
import { convertData } from '@/components/page-echarts/utils/convert-data'

const props = defineProps<{
  title?: string
  mapData: IDataType[]
}>()

const options: any = computed(() => {
  return {
    backgroundColor: '#fff',
    title: {
      text: props.title,
      left: 'center',
      textStyle: { color: '#fff' }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        return params.name + ' : ' + params.value[2]
      }
    },
    visualMap: {
      min: 0,
      max: 60000,
      calculable: true,
      text: ['高', '低'],
      inRange: {
        // color: ['rgb(55,162,218)', 'rgb(255,219,92)', 'rgb(251,114,147)'] // 更协调的颜色
        color: ['#37a2da', '#ffdb5c', '#fb7293']
        // color: ['#00ffff', '#ffff00', '#ff00ff'] // 高亮颜色
        // color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)'] // 教程里的颜色
      },
      textStyle: { color: '#333' }
    },
    geo: {
      map: 'china',
      roam: 'scale',
      emphasis: {
        areaColor: '#f4cccc',
        borderColor: 'rgb(9, 54, 95)',
        itemStyle: { areaColor: '#f4cccc' }
      },
      select: {
        itemStyle: { areaColor: '#ffdb5c' } // 设置地图点击后的颜色
      }
    },
    series: [
      {
        name: '销量',
        type: 'scatter',
        coordinateSystem: 'geo',
        // data: convertData(data),
        data: convertData(props.mapData),
        symbolSize: 12,
        emphasis: {
          itemStyle: { borderColor: '#fff', borderWidth: 1 }
        }
      },
      {
        type: 'map',
        map: 'china',
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: { show: false }
      }
    ]
  }
})
</script>

<template>
  <div class="map-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<style scoped lang="less"></style>
