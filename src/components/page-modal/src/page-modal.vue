<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import userForm from '@/base-ui/form'
// import useStore from 'vuex' // Vuex
import systemStore from '@/stores/main/system/system'

export default defineComponent({
  components: {
    userForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    titleName: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    // 确定按钮的逻辑
    const store = systemStore()
    const handleConfirmClick = () => {
      dialogVisible.value = false
      // 判断是新建用户按钮还是修改按钮
      if (Object.keys(props.defaultInfo).length) {
        // 修改
        console.log('修改')
        store.editPageDataAction({
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        // 新建用户
        console.log('新建')
        store.createPageDataAction({
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }

    return {
      dialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>

<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" width="25%" center destroy-on-close>
      <!-- 优化 -->
      <template #header>
        <div class="title">{{ titleName }}</div>
      </template>
      <user-form v-model="formData" v-bind="modalConfig" />
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="handleConfirmClick">确 认</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped lang="less">
:deep(.el-dialog__body) {
  padding: 5px calc(var(--el-dialog-padding-primary) + 5px) 5px;
}
.user-form {
  padding: 0;
}
.title {
  font-size: 18px;
  padding: 10px 20px;
}
</style>
