export const jsonData = {
  queryParm: {
    
  },
  shouquaninfo:{
    user:"admin",
    quanxian:[
      {
        id:"1",
        mk:"",
        label:"权限管理1",
        children:[
          {
            id:"11",
            mk:"",
            label:"权限管理1-1",
            quanxian:[],
            children:[]
          },
          {
            id:"12",
            mk:"",
            label:"权限管理1-2",
            quanxian:[],
            children:[
              {
                id:"121",
                mk:"",
                label:"权限管理1-2-1",
                quanxian:[],
                children:[],
              },
              {
                id:"122",
                mk:"",
                label:"权限管理1-2-2",
                quanxian:[],
                children:[],
              },
              {
                id:"122",
                mk:"",
                label:"权限管理1-2-2",
                quanxian:[],
                children:[],
              },
              {
                id:"122",
                mk:"",
                label:"权限管理1-2-2",
                quanxian:[],
                children:[],
              },
            ]
          }
        ]
      },
      {
        id:"2",
        mk:"",
        label:"用户管理2",
        children:[
          {
            id:"24",
            mk:"",
            label:"用户管理2-1",
            quanxian:[],
            children:[]
          }
        ]
      },
      {
        id:"3",
        mk:"",
        label:"角色管理3",
        children:[
          {
            id:"24",
            mk:"",
            label:"用户管理",
       
            quanxian:[]
          }
        ]
      },
      {
        id:"4",
        mk:"",
        label:"角色管理4",
        children:[
          {
            id:"24",
            mk:"",
            label:"用户管理",
       
            quanxian:[]
          }
        ]
      },
      {
        id:"5",
        mk:"",
        label:"角色管理5",
        children:[
          {
            id:"24",
            mk:"",
            label:"用户管理",
       
            quanxian:[]
          }
        ]
      },
      {
        id:"6",
        mk:"",
        label:"角色管理6",
        children:[
          {
            id:"24",
            mk:"",
            label:"用户管理",
       
            quanxian:[]
          }
        ]
      }
    ]
  },
  showCol: {
    appName: {
      value: true,
      label: '应用系统'
    },
    appShortName: {
      value: true,
      label: '系统简称'
    },
    roleCode: {
      value: true,
      label: '角色代码'
    },
    roleName: {
      value: true,
      label: '角色名称'
    },
    state: {
      value: true,
      label: '角色状态'
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
    roleCode: '',
    roleName: '',
    remark: ''
    
  },
  rules: {
    appId: [
      { required: true, message: "请选择应用系统", trigger: "blur" }
    ],
    roleCode: [
      { required: true, message: "请输入角色代码", trigger: "blur" },
      {pattern:/^R_.*/,message:"角色代码必须以R_开头", trigger: "blur" }
    ],
    roleName: [
      { required: true, message: "请输入角色名称", trigger: "blur" }
    ]
   
  } 
  

}
