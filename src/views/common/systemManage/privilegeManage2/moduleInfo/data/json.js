export const jsonData = {
  queryParm: {
   
  },
  showCol: {
    appName: {
      value: true,
      label: '应用系统'
    },
    prvgCode: {
      value: true,
      label: '模块代码'
    },
    prvgName: {
      value: true,
      label: '模块名称'
    },
    prvgParentCode: {
      value: true,
      label: '上级模块代码'
    },
    prvgParentName: {
      value: true,
      label: '上级模块名称'
    },
    state: {
      value: true,
      label: '模块状态'
    },
    orderNum: {
      value: true,
      label: '排序号'
    },
    remark: {
      value: true,
      label: '备注信息'
    },
    inputTime: {
      value: true,
      label: '创建时间'
    },
    updateTime: {
      value: true,
      label: '更新时间'
    }
  },
  activeName: 'first',
  dialogFrom: {
    appId: '',
    prvgParent:'',
    prvgCode: '',
    prvgName: '',  
    orderNum:'',
    remark:''
  },
  rules: {
    appId: [
      { required: true, message: "请选择应用系统", trigger: "blur" }
    ],
    prvgCode: [
      { required: true, message: "请输入模块代码", trigger: "blur" },
      {pattern:/^S_.*/,message:"模块代码必须以S_开头", trigger: "blur" }
    ],
    prvgName: [
      { required: true, message: "请输入模块名称", trigger: "blur" }
    ],
    orderNum: [
      { required: true, message: "请输入排序号", trigger: "blur" },
      {pattern:/^\d+$/,message:"排序号只能是数字", trigger: "blur" }
    ]

  } 

}
