<script lang="ts">
import { defineComponent } from 'vue'
import loginPanel from './cpns/login-panel.vue'
export default defineComponent({
  components: {
    loginPanel
  },
  setup() {
    return {}
  }
})
</script>

<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/img/login-bg.svg');
}
</style>
