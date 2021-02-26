export const jsonData = {
  queryParm: {
    
  },
  showCol: {
    userCode: {
      value: true,
      label: '用户代码'
    },
    userName: {
      value: true,
      label: '用户名称'
    },
    orgName: {
      value: true,
      label: '机构名称'
    },
    deptName: {
      value: true,
      label: '部门名称'
    },  
    userState: {
      value: true,
      label: '用户状态'
    },
    loginType: {
      value: true,
      label: '登录方式'
    },
    accExpiryDate: {
      value: true,
      label: '账号有效期'
    },
    pwdExpiryDate: {
      value: true,
      label: '密码有效期'
    },
    remark: {
      value: true,
      label: '备注'
    }
  },
  activeName: 'first',
  dialogFrom: {
    
  },
  rules: {
    deptId: [
      { required: true, message: "请选择所属部门", trigger: "blur" }
    ],
    userCode: [
      { required: true, message: "请输入用户代码", trigger: "blur" }
    ],
    userName: [
      { required: true, message: "请输入用户名称", trigger: "blur" }
    ],
    userPhone: [
      { required: true, message: "请输入手机号码", trigger: "blur" }
    ],
    loginType: [
      { required: true, message: "请选择登录方式", trigger: "blur" }
    ],
    ifFace: [
      { required: true, message: "请选择是否人像识别", trigger: "blur" }
    ],
    ifMsg: [
      { required: true, message: "请选择是否推送登录短信", trigger: "blur" }
    ],
    ifIpLimit: [
      { required: true, message: "请选择是否限定登录IP", trigger: "blur" }
    ],
  } 
}
