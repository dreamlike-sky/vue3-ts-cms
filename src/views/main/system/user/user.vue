<script lang="ts">
// import { defineComponent, ref } from 'vue' // pageSearch
import { defineComponent, computed } from 'vue' // pageContent
// import { defineComponent } from 'vue'
// import UserForm, { type IFormItem } from '@/base-ui/form'
// import UserForm, { type IForm } from '@/base-ui/form'
// import userForm from '@/base-ui/form' // pageSearch-
import { searchFormConfig } from './config/search.config'
import pageSearch from '@/components/page-search'

// import { useStore } from 'vuex' // Vuex
// import { useStore } from '@/store' // Vuex
// import systemStore from '@/stores/main/system/system' // Pinia pageContent
// import userTable from '@/base-ui/table' // --
import { contentTableConfig } from './config/content.config'
import pageContent from '@/components/page-content'

import { usePageSearch } from '@/hooks/use-page-search'

// import userForm from '@/base-ui/form' // pageModal
import { modalConfig } from './config/modal.config'
import pageModal from '@/components/page-modal'
import { usePageModal } from '@/hooks/use-page-modal'
import useStore from '@/stores'

export default defineComponent({
  name: 'user',
  components: {
    // userForm

    pageSearch,
    // userTable
    pageContent,
    // userForm // pageModal
    pageModal
  },
  setup() {
    /*
    const formItems: IFormItem[] = [
      {
        type: 'input',
        label: 'id',
        placeholder: '请输入id'
      },
      {
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名'
      },
      {
        type: 'input',
        label: '姓名',
        placeholder: '请输入姓名'
      },
      {
        type: 'select',
        label: '爱好',
        placeholder: '请选择你的爱好',
        options: [
          { title: '篮球', value: 'basketball' },
          { title: '足球', value: 'football' }
        ]
      },
      {
        type: 'datapicker',
        label: '创建时间',
        placeholder: '请选择创建时间范围',
        otherOptions: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          type: 'datetimerange'
        }
      }
    ]
    const labelWidth = '70px'
    const itemStyle = {
      padding: '10px 50px 10px 20px'
    }
    const colLayout = {
      span: 8
    }
    */
    // 将上面代码统一封装，然后做模块抽取
    /*
    const searchFormConfig: IForm = {
      formItems: [
        {
          type: 'input',
          label: 'id',
          placeholder: '请输入id'
        },
        {
          type: 'input',
          label: '用户名',
          placeholder: '请输入用户名'
        },
        {
          type: 'input',
          label: '姓名',
          placeholder: '请输入姓名'
        },
        {
          type: 'select',
          label: '爱好',
          placeholder: '请选择你的爱好',
          options: [
            { title: '篮球', value: 'basketball' },
            { title: '足球', value: 'football' }
          ]
        },
        {
          type: 'datapicker',
          label: '创建时间',
          placeholder: '请选择创建时间范围',
          otherOptions: {
            startPlaceholder: '开始时间',
            endPlaceholder: '结束时间',
            type: 'datetimerange'
          }
        }
      ],
      labelWidth: '70px',
      itemStyle: {
        padding: '10px 50px 10px 20px'
      },
      colLayout: {
        span: 8
      }
    }
    */

    // 另外抽取封装为独立组件 pageSearch
    /*
    const formDtata = ref({
      id: '',
      name: '',
      realname: '',
      sport: '',
      createTime: ''
    })
    */

    // 封装使用的数据 pageContent
    // Vuex
    /*
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    */
    // Pinia
    /*
    const store = systemStore()
    store.getPageListAction({
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.$state.userList)
    const userCount = computed(() => store.$state.userCount)
    */

    // 抽取为数据模块--
    /*
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '120' },
      { prop: 'enable', label: '状态', minWidth: '75', slotName: 'status' },
      { prop: 'createAt', label: '创建时间', minWidth: '170', slotName: 'createAt' },
      { prop: 'updateAt', label: '更新时间', minWidth: '170', slotName: 'updateAt' },
      { label: '操作', minWidth: '100', slotName: 'handler' }
    ]
    const showIndexColumn = true
    const showSelectColumn = true
    const title = '用户列表'
    */

    // 按钮逻辑抽取为模块
    /*
    const pageContentRef = ref<InstanceType<typeof pageContent>>()
    const handleResetClick = () => {
      pageContentRef.value?.getPageData()
    }
    const handleQueryClick = (queryInfo: any) => {
      pageContentRef.value?.getPageData(queryInfo)
    }
    */
    const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch()
    // const dialogVisible = ref(true) // pageModal
    // const formData = ref({}) // pageModal

    // pageModal 相关的 hooks 逻辑
    // 处理密码逻辑
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
      // 使用非空断言(!)
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
      passwordItem!.isHidden = true
    }

    // 对话框动态添加部门和角色列表
    const store = useStore()
    // store.getInitialDataAction()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find((item) => item.field === 'departmentId')
      // map()方法返回一个新数组，数组中的元素为原始数组元素调用函数处理的后值
      departmentItem!.options = store.$state.entireDepartment.map((item) => {
        return {
          title: item.name,
          value: item.id
        }
      })
      const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
      roleItem!.options = store.$state.entireRole.map((item) => {
        return {
          title: item.name,
          value: item.id
        }
      })
      return modalConfig
    })

    // 调用 hook 获取公共变量和函数
    // 封装为 usePageModal 方法
    /*
    const pageModalRef = ref<InstanceType<typeof pageModal>>()
    const defaultInfo = ref({})
    const handleNewData = () => {
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }
    const handleEditData = (item: any) => {
      defaultInfo.value = { ...item }
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }
    */
    const { pageModalRef, defaultInfo, handleNewData, handleEditData, isTitleName } = usePageModal(
      newCallback,
      editCallback
    )

    return {
      // 做统一封装
      /*
      formItems,
      labelWidth,
      itemStyle,
      colLayout
      */
      searchFormConfig,
      // formDtata // -

      // 封装使用的数据 pageContent
      /*
      userList,
      userCount,
      */

      // 抽取为数据模块--
      /*
      propList,
      showIndexColumn,
      showSelectColumn,
      title
      */
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      // dialogVisible, // pageModel --
      // modalConfig,
      modalConfigRef,
      // formData // pageModel --
      handleNewData,
      handleEditData,
      pageModalRef,
      defaultInfo,
      isTitleName
    }
  }
})
</script>

<template>
  <div class="user">
    <!-- <user-form
        :formItems="formItems"
        :labelWidth="labelWidth"
        :itemStyle="itemStyle"
        :colLayout="colLayout"
      /> -->
    <!-- 将上面代码统一封装 -->
    <!-- <user-form v-bind="searchFormConfig" :formDtata="formDtata" /> -->
    <!-- <user-form v-bind="searchFormConfig" v-model="formDtata" /> -->

    <!-- 封装为组件 pageSearch -->
    <!-- <user-form v-bind="searchFormConfig" v-model="formDtata">
        <template #header>
          <h1 class="header">高级检索</h1>
        </template>
        <template #footer>
          <div class="handle-btns">
            <el-button icon="Refresh">重置</el-button>
            <el-button type="primary" icon="Search">搜索</el-button>
          </div>
        </template>
      </user-form> -->
    <!-- 封装为组件 pageSearch -->
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />

    <!-- 封装为组件 pageContent -->
    <!-- <div class="centent"> -->
    <!-- !封装为组件 userTable -->
    <!-- !<el-table :data="userList" stripe style="width: 100%">
        <el-table-column prop="name" label="用户名" min-width="180" />
        <el-table-column prop="realname" label="姓名" min-width="180" />
        <el-table-column prop="cellphone" label="电话号码" min-width="180" />
        <template v-for="propItem in propList" :key="propItem.prop">
          <el-table-column v-bind="propItem" align="center" />
        </template>
      </el-table> -->

    <!-- !使用数据模块 -->
    <!-- !<user-table
        :listData="userList"
        :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
        :title="title"
      > -->
    <!-- <user-table :listData="userList" v-bind="contentTableConfig"> -->
    <!-- !列中的插槽 -->
    <!-- !<template #status>
          <el-button>哈哈哈</el-button>
        </template> -->
    <!-- <template #status="scope"> -->
    <!-- !<el-button plain size="small" :type="scope.row.enable ? 'primary' : 'info'">
            {{ scope.row.enable ? '启用' : '禁用' }}
          </el-button> -->
    <!-- !优化 -->
    <!-- <el-tooltip
            class="box-item"
            effect="light"
            :content="scope.row.enable ? '启用' : '禁用'"
            placement="top"
            :offset="0"
            :show-arrow="false"
          >
            <el-switch v-model="scope.row.enable" size="small" />
          </el-tooltip>
        </template>
        <template #createAt="scope"> -->
    <!-- !<span>{{ scope.row.createAt }}</span> -->
    <!-- <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
    </template>
        <template #updateAt="scope">
          <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
        </template>
        <template #handler>
          <div class="handle-btns">
            <el-button icon="EditPen" size="small" type="primary" text>修改</el-button>
            <el-button icon="Delete" size="small" type="danger" text>删除</el-button> -->
    <!-- !优化 -->
    <!-- !<el-tooltip class="box-item" effect="light" content="修改" placement="left">
              <el-button size="small" icon="Edit" plain type="primary"></el-button>
            </el-tooltip>
            <el-tooltip class="box-item" effect="light" content="删除" placement="right">
              <el-button size="small" icon="Delete" plain type="danger"></el-button>
            </el-tooltip> -->
    <!-- </div>
        </template> -->
    <!-- !数据表头部模块插槽 -->
    <!-- <template #header></template>
        <template #headerHandler>
          <el-button plain size="small" type="primary">新建用户</el-button>
          <el-button icon="Refresh" plain size="small" type="primary"></el-button>
        </template> -->

    <!-- !数据表底部模块插槽 -->
    <!-- <template #footer></template>
      </user-table>
    </div> -->
    <!-- !封装为组件 pageContent -->
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      page-name="users"
      @new-btn-click="handleNewData"
      @edit-btn-click="handleEditData"
    /><!-- ++ -->
    <!-- !封装为组件 pageModal -->
    <!-- <div class="page-modal">
      <el-dialog v-model="dialogVisible" title="新建" width="25%" center>
        <user-form v-model="formData" v-bind="modalConfig" />
        <template #footer>
          <span class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确 认</el-button>
            <el-button @click="dialogVisible = false">取 消</el-button>
          </span>
        </template>
      </el-dialog>
    </div> -->
    <!-- <page-modal ref="pageModalRef" :modalConfig="modalConfig" :defaultInfo="defaultInfo" /> -->
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      page-name="users"
      :title-name="isTitleName ? contentTableConfig.btnName : '修改'"
    />
  </div>
</template>

<style scoped lang="less">
// 封装为组件
/*
.header { // -
  color: #606266;
  margin: 10px 0;
}
.handle-btns {
  text-align: right;
  margin-right: 50px;
}
*/

// 封装为组件 pageContent --
/*
.handle-btns {
  :deep(.el-button) {
    padding: 0 !important;
  }
}
*/

// 封装为组件 pageModal --
/*
:deep(.el-dialog__body) {
  padding: 5px calc(var(--el-dialog-padding-primary) + 5px) 5px;
}
.user-form {
  padding: 0;
}
*/
</style>
<!-- !封装为组件 pageContent -->
<!-- <style lang="less">
.el-popper {
  padding: 2px 5px;
}
</style> -->
