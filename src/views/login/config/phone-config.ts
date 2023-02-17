export const rules = {
  num: [
    {
      required: true,
      message: '请输入手机号码',
      trigger: 'blur'
    },
    {
      pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: '手机号格式不正确，请重新输入',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入短信验证码',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9a-zA-Z]{4}$/,
      message: '短信验证码错误或者失效，请重新获取',
      trigger: 'blur'
    }
  ]
}
