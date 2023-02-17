<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'
// import { useStore } from 'vuex' // Vuex
import loginStore from '@/stores/login/login'
export default defineComponent({
  setup() {
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    // 校验规则
    // const rules = {}

    const formRef = ref<InstanceType<typeof ElForm>>()

    // const store = useStore() // Vuex
    const accountLogin = loginStore()

    const loginAction = (isKeepPassword: boolean) => {
      // console.log('正在登录~')
      formRef.value?.validate((valid) => {
        // console.log(valid)
        if (valid) {
          // console.log('真正执行登录~')
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            // 本地缓存
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          // 2.登录验证
          // store.dispatch('login/accountLoginAction', { ...account }) // Vuex
          accountLogin.accountLoginAction({ ...account })
        }
      })
    }
    return {
      account,
      rules,
      loginAction,
      formRef,
      accountLogin
    }
  }
})
</script>

<template>
  <div class="login-account">
    <el-form class="demo-ruleForm" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
.login-account {
  padding: 10px;
}
</style>
