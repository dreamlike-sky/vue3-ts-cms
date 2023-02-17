<script lang="ts">
import { defineComponent } from 'vue'
import countUp from '@/base-ui/count-up'

export default defineComponent({
  components: {
    countUp
  },
  props: {
    panelData: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const counterOption1 = {
      decimalPlaces: 0, // 不保留小数
      prefix: '' // 单位
    }
    const counterOption2 = {
      decimalPlaces: 2, // 保留小数点后两位
      prefix: '￥' // 单位
    }
    return {
      counterOption1,
      counterOption2
    }
  }
})
</script>

<template>
  <div class="statistical">
    <div class="header">
      <span>{{ panelData.title }}</span>
      <el-tooltip effect="light" :content="panelData.tips" placement="top">
        <el-icon><Warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <count-up
        :number="panelData.number1"
        :option="panelData.amount === 'saleroom' ? counterOption2 : counterOption1"
      />
    </div>
    <div class="footer">
      <span>
        {{ panelData.subtitle }}
        <count-up
          :number="panelData.number1"
          :option="panelData.amount === 'saleroom' ? counterOption2 : counterOption1"
        />
      </span>
    </div>
  </div>
</template>

<style scoped lang="less">
@h: 38px;
.statistical {
  display: flex;
  padding: 0 20px;
  margin-bottom: 20px;
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
</style>
