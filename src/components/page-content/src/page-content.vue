<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import userTable from '@/base-ui/table'
import systemStore from '@/stores/main/system/system'
import { usePremissions } from '@/hooks/use-permissions'

export default defineComponent({
  components: {
    userTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick', 'btnName'],
  setup(props, { emit }) {
    const store = systemStore()

    // 获取操作权限
    const isCreate = usePremissions(props.pageName, 'create')
    const isUpdate = usePremissions(props.pageName, 'update')
    const isDelete = usePremissions(props.pageName, 'delete')
    const isQuery = usePremissions(props.pageName, 'query')

    // 双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.getPageListAction({
        // pageUrl: '/users/list',
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    // 获取数据
    // const usersList = computed(() => store.$state.usersList)
    // const usersCount = computed(() => store.$state.usersCount)
    // const usersListData = computed(() => store.getters[`system/pageListData`](props.pageName)) // Vuex
    const usersListData = computed(() => store.pageListData(props.pageName))
    const usersListCount = computed(() => store.pageCountData(props.pageName))

    // 获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter((item: any) => {
      if (item.slotName === 'status') return false
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'handler') return false
      return true
    })

    // 用户删除操作
    const handleDeleteClick = (item: any) => {
      // console.log(item)
      // Vuex
      // store.dispatch('system/deletePageDataAction', {
      //   pageName: props.pageName,
      //   id: item.id
      // })
      // Pinia
      console.log('删除')
      store.deletePageDataAction({
        pageName: props.pageName,
        id: item.id
      })
    }
    // 用户新建操作
    const handleNewClick = () => {
      emit('newBtnClick')
    }
    // 用户修改操作
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }

    return {
      // userList,
      // userCount
      usersListData,
      getPageData,
      usersListCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
    }
  }
})
</script>

<template>
  <div class="page-content">
    <!-- <user-table :listData="usersList" v-bind="contentTableConfig"> -->
    <user-table
      :listData="usersListData"
      v-bind="contentTableConfig"
      :countData="usersListCount"
      v-model:page="pageInfo"
      row-key="id"
      :tree-props="{ children: 'children' }"
    >
      <!-- 数据表头部模块插槽 -->
      <template #header></template>
      <template #headerHandler>
        <el-button v-if="isCreate" plain size="small" type="primary" @click="handleNewClick">
          {{ contentTableConfig.btnName }}
        </el-button>
      </template>

      <!-- 数据表列中的插槽 -->
      <template #status="scope">
        <!-- <el-button plain size="small" :type="scope.row.status ? 'primary' : 'info'">
          {{ scope.row.status ? '启用' : '禁用' }}
        </el-button> -->
        <!-- 优化 -->
        <el-tooltip
          class="box-item"
          effect="light"
          :content="scope.row.status ? '启用' : '禁用'"
          placement="top"
          :offset="0"
          :show-arrow="false"
        >
          <el-switch
            v-model="scope.row.status"
            :active-value="scope.row.status"
            :disabled="true"
            size="small"
          />
        </el-tooltip>
      </template>
      <template #createAt="scope">
        <!-- <span>{{ scope.row.createAt }}</span> -->
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            v-if="isCreate"
            icon="EditPen"
            size="small"
            type="primary"
            text
            @click="handleEditClick(scope.row)"
          >
            修改
          </el-button>
          <el-button
            v-if="isCreate"
            icon="Delete"
            size="small"
            type="danger"
            text
            @click="handleDeleteClick(scope.row)"
          >
            删除
          </el-button>
          <!-- 优化 -->
          <!-- <el-tooltip class="box-item" effect="light" content="修改" placement="left">
              <el-button size="small" icon="Edit" plain type="primary"></el-button>
            </el-tooltip>
            <el-tooltip class="box-item" effect="light" content="删除" placement="right">
              <el-button size="small" icon="Delete" plain type="danger"></el-button>
            </el-tooltip> -->
        </div>
      </template>
      <!-- <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :preview-teleported="true"
        />
      </template> -->
      <!-- 在 page-content 中动态插入其他的插槽 -->
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>

      <!-- 数据表底部模块插槽 -->
      <template #footer></template>
    </user-table>
  </div>
</template>

<style scoped lang="less">
.handle-btns {
  :deep(.el-button) {
    padding: 0 !important;
  }
}
</style>
