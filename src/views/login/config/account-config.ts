export const rules = {
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur' // 失去焦点触发
    },
    {
      pattern: /^[a-z0-9]{3,10}$/,
      message: '用户名必须是3~10个字母或者数字！',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入登录密码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上字母或者数字！',
      trigger: 'blur'
    }
  ]
}
