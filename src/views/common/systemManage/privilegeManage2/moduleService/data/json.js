export const jsonData = {
  queryParm: {
    
  },
  showCol: {
    prvgName: {
      value: true,
      label: "模块名称"
    },
    funcCode: {
      value: true,
      label: "功能代码"
    },
    funcName: {
      value: true,
      label: "功能名称"
    },
    funcIcon: {
      value: true,
      label: "功能图标"
    },
    orderNum: {
      value: true,
      label: "排序号"
    },
    state: {
      value: true,
      label: "功能状态"
    },
    remark: {
      value: true,
      label: "备注信息"
    },
    inputTime: {
      value: true,
      label: "创建时间"
    },
    updateTime: {
      value: true,
      label: "更新时间"
    }
  },
  activeName: "first",
  dialogFrom: {
    prvgId: "",
    funcCode: "",
    funcName: "",
    funcIcon: "",
    orderNum: "",
    remark: ""
  },
  rules: {
    prvgId: [
      { required: true, message: "请选择所属模块", trigger: "blur" }
    ],
    funcCode: [
      { required: true, message: "请输入功能代码", trigger: "blur" }
    ], 
    funcName: [
      { required: true, message: "请输入功能名称", trigger: "blur" }
    ], 
    funcIcon: [
      { required: true, message: "请选择功能图标",  }
    ], 
    orderNum: [
      { required: true, message: "请输入排序号", trigger: "blur" },
      {pattern:/^\d+$/,message:"排序号只能是数字", trigger: "blur" }
    ]   
  },
 
};
