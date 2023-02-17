<script lang="ts">
import { defineComponent, type PropType, ref, watch } from 'vue'
import type { IFormItem } from '../types'
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      // 数组或对象必须要用箭头函数
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '90px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 70px 10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // ≥1920px 显示4个
        lg: 8, // ≥1200px 显示3个
        md: 12, // ≥992px 显示2个
        sm: 24, // ≥768px 显示1个
        xs: 24 // <768px 显示1个
      })
    },
    // formDtata: {
    //   type: Object,
    //   required: true
    // }
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // const formDtata = ref({ ...props.modelValue })
    // watch(
    //   formDtata,
    //   (newValue) => {
    //     // console.log(formDtata)
    //     emit('update:modelValue', newValue)
    //   },
    //   {
    //     deep: true // 深度监听
    //   }
    // )

    // 方法二：
    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }
    return {
      // formDtata
      handleValueChange
    }
  }
})
</script>

<template>
  <div class="user-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <!-- <el-form label-width="70px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="密码">
            <el-input placeholder="请输入密码" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="爱好">
            <el-select placeholder="请选择你的爱好" style="width: 100%">
              <el-option value="basketball" label="篮球" />
              <el-option value="football" label="足球" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间">
            <el-date-picker
              style="width: 100%"
              placeholder="请选择创建时间范围"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              type="datetimerange"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form> -->

    <!-- 动态生成组件 -->
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <!--  表单验证属性(按需添加) -> :rules="item.rules" -->
            <el-form-item :label="item.label" :style="itemStyle" v-if="!item.isHidden">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <!-- <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formDtata[`${item.field}`]"
                /> -->
                <!-- 方法二： -->
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[`${item.field}`]"
                  @update:model-value="handleValueChange($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <!-- <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-model="formDtata[`${item.field}`]"
                > -->
                <!-- 方法二： -->
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  :model-value="modelValue[`${item.field}`]"
                  @update:model-value="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    :label="option.title"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'datapicker'">
                <!-- <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formDtata[`${item.field}`]"
                /> -->
                <!-- 方法二： -->
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:model-value="handleValueChange($event, item.field)"
                  :unlink-panels="true"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="less">
.user-form {
  padding: 15px 0;
}
</style>
