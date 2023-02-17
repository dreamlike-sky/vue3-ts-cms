<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserForm from '@/base-ui/form'
export default defineComponent({
  components: {
    UserForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    /*
    const formDtata = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    */
    // 双向绑定的属性应该是由配置文件的 field 来决定
    // 1.优化一：fromData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const fromOriginData: any = {}
    for (const item of formItems) {
      fromOriginData[item.field] = ''
      // console.log(fromOriginData) // {id: '', name: '', realname: '', sport: '', createTime: ''}
    }
    const formDtata = ref(fromOriginData)
    // console.log(formDtata) //RefImpl{__v_isShallow: false, dep: undefined, __v_isRef: true, _rawValue: {}, _value: Proxy{}}

    // 2.优化二：当用户点击重置
    const handleResetClick = () => {
      // console.log(fromOriginData) // {id: '', name: '', realname: '', sport: '', createTime: ''}
      formDtata.value = fromOriginData
      // console.log(formDtata.value) // Proxy{id: '', name: '', realname: '', sport: '', createTime: ''}

      // 方法一：
      /*
      for (const key in fromOriginData) {
        // console.log(key) // id,name,realname,sport,createTime
        // console.log(formDtata.value[`${key}`])
        formDtata.value[`${key}`] = fromOriginData[key]
        // console.log(formDtata.value[`${key}`])
      }
      */

      emit('resetBtnClick')
    }

    // 3.优化三：当用户点击搜索
    const handleQueryClick = () => {
      // console.log('1111')
      emit('queryBtnClick', formDtata.value)
    }
    return {
      formDtata,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<template>
  <div class="page-search">
    <user-form v-bind="searchFormConfig" v-model="formDtata">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" icon="Search" @click="handleQueryClick">搜索</el-button>
        </div>
      </template>
    </user-form>
  </div>
</template>

<style scoped lang="less">
.page-search {
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  .header {
    color: #606266;
    margin: 10px 0;
  }
  .handle-btns {
    text-align: right;
    margin-right: 50px;
  }
}
</style>
