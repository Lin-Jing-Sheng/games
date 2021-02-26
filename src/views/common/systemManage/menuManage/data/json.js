export const jsonData = {
  queryParm: {
    
  },
  showCol: {
    appName: {
      value: true,
      label: "应用系统"
    },
    menuCode: {
      value: true,
      label: "菜单代码"
    },
    menuName: {
      value: true,
      label: "菜单名称"
    },
    menuIcon: {
      value: true,
      label: "图标"
    },
    menuUrl: {
      value: true,
      label: "地址"
    },
    parentMenuCode:{
      value: true,
      label: "上级菜单代码"
    },
    parentMenuName:{
      value: true,
      label: "上级菜单名称"
    },
    state: {
      value: true,
      label: "菜单状态"
    },
    orderNum:{
      value: true,
      label: "排序号"
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
    appId: "",
    menuParent: "",
    menuCode: "",
    menuName: "",
    menuIcon: "",
    menuUrl: "",
    openType: "",
    orderNum: "",
    remark:'',
    prvgId:''
  },
  rules: {
    appId: [
      { required: true, message: "请选择应用系统", trigger: "blur" }
    ],
    menuCode: [
      { required: true, message: "请输入菜单代码", trigger: "blur" },
      {pattern:/^M_.*/,message:"菜单代码代码必须以M_开头", trigger: "blur" }
    ],
    menuName: [
      { required: true, message: "请输入菜单名称", trigger: "blur" }
    ], 
    menuIcon: [
      { required: true, message: "请选择菜单图标", trigger: "blur" }
    ], 
    menuUrl: [
      { required: true, message: "请输入菜单地址", trigger: "blur" }
    ],
    orderNum: [
      { required: true, message: "请输入排序号", trigger: "blur" },
      {pattern:/^\d+$/,message:"排序号只能是数字", trigger: "blur" }
    ],
    openType: [
      { required: true, message: "请选择打开方式", trigger: "blur" }
    ], 
    prvgId: [
      { required: true, message: "请选择权限名称", trigger: "blur" }
    ]
  } 
};
