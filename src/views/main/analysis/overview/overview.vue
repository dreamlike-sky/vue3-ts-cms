<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/base-ui/card'
import TextLink from '@/base-ui/text-link'
import {
  technologyStacks,
  dependencies,
  devDependencies,
  projectCode,
  nameStandard,
  cpnStandard,
  gitStandard
} from './config'
import Descriptions from '@/base-ui/descriptions'
import ProjectTree from '@/base-ui/project-tree'

export default defineComponent({
  name: 'overview',
  components: {
    Card,
    TextLink,
    Descriptions,
    ProjectTree
  },
  setup() {
    return {
      technologyStacks,
      dependencies,
      devDependencies,
      projectCode,
      nameStandard,
      cpnStandard,
      gitStandard
    }
  }
})
</script>

<template>
  <div class="overview">
    <card title="关于系统">
      <div class="content-left">
        本系统是基于 Vue3、Pinia、VueRouter、Vite、ElementPlus、TypeScript、Echart5
        等后台系统解决方案。
      </div>
    </card>
    <card title="技术栈">
      <text-link :text-arrs="technologyStacks" />
      <descriptions class="d-bottom" title="生产环境依赖" :column="2" :table-datas="dependencies" />
      <descriptions title="开发环境依赖" :column="2" :table-datas="devDependencies" />
    </card>
    <card title="项目结构">
      <project-tree language="bash" :code="projectCode" />
    </card>
    <card title="项目规范">
      <descriptions class="d-bottom" title="文件命名规范" :column="1" :table-datas="nameStandard" />
      <descriptions title="编写组件规范" :column="1" :table-datas="cpnStandard" />
    </card>
    <card title="Git提交规范">
      <descriptions title="编写组件规范" :column="1" :table-datas="gitStandard" />
    </card>
  </div>
</template>

<style scoped lang="less">
.el-card {
  margin-bottom: 20px;
  &:deep(.el-card__header span) {
    font-weight: 700;
  }
}
.content-left {
  text-align: left;
}

.description {
  &:deep(.el-descriptions__title) {
    font-weight: 400;
  }
}
.d-bottom {
  margin-bottom: 20px;
}
</style>
