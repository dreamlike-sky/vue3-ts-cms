<script lang="ts">
// echarts 使用小案例
/*
import { defineComponent, ref, onMounted } from 'vue'
import * as echarts from 'echarts'
*/

import { defineComponent, computed } from 'vue'
import boxCard from '@/base-ui/card'
// import baseEchart from '@/base-ui/echart'
// import type { EChartsOption } from 'echarts'
import { PieEchart, RoseEchart, LineEchart, BarEchart, MapEchart } from '@/components/page-echarts'
// import { useStore } from 'vuex' // Vuex
import dashboardStore from '@/stores/main/analysis/dashboard'
import StatisticalPanel from '@/components/statistical-panel'

export default defineComponent({
  name: 'dashboard',
  components: {
    boxCard,
    // baseEchart
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart,
    StatisticalPanel
  },
  setup() {
    // echarts 使用小案例
    /*
    const divRef = ref<HTMLElement>()
    onMounted(() => {
      // 1.初始化 echarts 的实例
      const echartsInstance = echarts.init(divRef.value!, 'light', { renderer: 'svg' })

      // 2.编写配置
      const option = {
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        legend: { data: ['销量'] },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{ name: '销量', type: 'bar', data: [5, 20, 36, 10, 10, 20] }]
      }

      // 3.设置配置，并且设置配置进行绘制
      echartsInstance.setOption(option)
    })
    */

    // 抽取为 pieEchart 组件
    /*
    const options: EChartsOption = {
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
    */

    // Vuex
    // const store = useStore()
    // store.dispatch('dashboard/getDashboardDataAction')
    const store = dashboardStore()
    store.getDashboardDataAction()
    const categoryGoodsCount = computed(() => {
      return store.$state.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.$state.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLabels, values }
    })

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.$state.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })

    const addressGoodsSale = computed(() => {
      return store.$state.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    const topPanelData = computed(() => store.$state.amountGoodsList)

    return {
      // echarts 使用小案例
      // divRef
      // 抽取为 pieEchart 组件
      // options
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale,
      topPanelData
    }
  }
})
</script>

<template>
  <div class="dashboard">
    <!-- echarts 使用小案例 -->
    <!-- <div ref="divRef" :style="{ width: '500px', height: '450px' }"></div>
    <div ref="mapRef" :style="{ width: '500px', height: '450px' }"></div> -->
    <!-- 布局 -->
    <!-- <el-row :gutter="10">
      <el-col :span="6">
        <div style="background-color: white; height: 100px">1</div>
      </el-col>
      <el-col :span="6">
        <div style="background-color: white; height: 100px">1</div>
      </el-col>
      <el-col :span="6">
        <div style="background-color: white; height: 100px">1</div>
      </el-col>
      <el-col :span="6">
        <div style="background-color: white; height: 100px">1</div>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top: 20px">
      <el-col :span="7">
        <div style="background-color: white; height: 100px">1</div>
      </el-col>
      <el-col :span="10">
        <div style="background-color: white; height: 100px">2</div>
      </el-col>
      <el-col :span="7">
        <div style="background-color: white; height: 100px">3</div>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top: 20px">
      <el-col :span="12">
        <div style="background-color: white; height: 100px">1</div>
      </el-col>
      <el-col :span="12">
        <div style="background-color: white; height: 100px">2</div>
      </el-col>
    </el-row> -->

    <!-- <el-row :gutter="10">
      <el-col :span="6">-->
    <!-- 抽取为统计面板子组件 -->
    <!-- <div class="statistical">
          <div class="header">
            <span>商品总销量</span>
            <el-tooltip effect="light" content="所有商品的总销量" placement="top">
              <el-icon><Warning /></el-icon>
            </el-tooltip>
          </div>
          <div class="content">
            <span>12313</span>
          </div>
          <div class="footer">
            <span>
              商品总销量
              <span>123</span>
            </span>
          </div>
        </div> -->
    <!-- <statistical-panel />
      </el-col>
      <el-col :span="6">
        <statistical-panel />
      </el-col>
      <el-col :span="6">
        <statistical-panel />
      </el-col>
      <el-col :span="6">
        <statistical-panel />
      </el-col>
    </el-row> -->

    <el-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel :panel-data="item" />
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="7">
        <!-- 抽取为 card 组件 -->
        <!-- <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>Card name</span>
              <el-button class="button" text>Operation button</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card> -->
        <box-card title="分类商品数量(饼图)">
          <!-- 抽取为 pieEchart 组件 -->
          <!-- <base-echart :options="options"></base-echart> -->
          <pie-echart :pie-data="categoryGoodsCount"></pie-echart>
        </box-card>
      </el-col>
      <el-col :span="10">
        <box-card title="不同城市商品销量">
          <map-echart :map-data="addressGoodsSale"></map-echart>
        </box-card>
      </el-col>
      <el-col :span="7">
        <box-card title="分类商品数量(玫瑰图)">
          <rose-echart :rose-data="categoryGoodsCount"></rose-echart>
        </box-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row">
      <el-col :span="12">
        <box-card title="分类商品的销量">
          <lineEchart v-bind="categoryGoodsSale"></lineEchart>
        </box-card>
      </el-col>
      <el-col :span="12">
        <box-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </box-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="less">
/*
.dashboard {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
}
*/
// 抽取为统计面板子组件
/*
@h: 38px;
.statistical {
  display: flex;
  padding: 0 20px;
  height: 130px;
  border: 1px solid #e4e7ed;
  background-color: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  // 设置主轴为垂直列布局，内容从上到下
  flex-direction: column;
  // 内容左对齐
  justify-content: flex-start;
  text-align: left;
  overflow: hidden;

  .header {
    display: flex;
    height: @h;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    // 设置主轴为水平行布局，内容从左到右
    flex-direction: row;
    // 内容两边对齐
    justify-content: space-between;
    // 内容底部对齐
    align-items: flex-end;
  }
  .content {
    display: flex;
    margin-left: 0px;
    flex: 1;
    border-bottom: 1px solid #e4e7ed;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
    // 垂直布局，从上到下
    flex-direction: column;
    // 垂直方向居中对齐
    justify-content: center;
    // 内容左对齐
    align-items: flex-start;
  }
  .footer {
    display: flex;
    height: @h;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.85);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
*/
.row {
  margin-top: 20px;
}
</style>
