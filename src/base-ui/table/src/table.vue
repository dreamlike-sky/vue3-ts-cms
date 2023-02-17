<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array as any,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    countData: {
      type: Number,
      default: 0
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 1, pageSize: 10 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      // console.log(value)
      emit('selectionChange', value)
    }

    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }

    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }

    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<template>
  <div class="user-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      stripe
      style="width: 100%"
      @selection-change="handleSelectionChange"
      tooltip-effect="light"
      v-bind:="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="45"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="60"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <!-- <el-button>{{ scope.row.propItem.prop }}</el-button> -->
            <slot :name="propItem.slotName" :row="scope.row">{{ scope.row[propItem.prop] }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[30, 20, 10]"
          layout="->, total, sizes, prev, pager, next, jumper"
          :total="countData"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<style scoped lang="less">
.user-table {
  padding: 10px 20px;
  background-color: #ffffff;
  border-radius: 5px;

  .header {
    display: flex;
    height: 45px;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 20px;
      font-weight: 700;
      color: #606266;
    }
    .handler {
      align-items: center;
    }
  }

  .footer {
    margin-top: 15px;
  }
}
</style>
<style lang="less">
/* 去除小箭头 */
.el-popper[data-popper-placement^='top'] > .el-popper__arrow {
  visibility: hidden;
  /* bottom: 5px; */ /* 无效 */
}
</style>
