export default [
  {
    "id": 1,
    "code": "M_SYS_MANAGE",
    "prvgCode": "S_SYSTEM_MANAGE",
    "name": "系统管理",
    "source": "el-icon-setting",
    "path": "/common/systemManege",
    "openType": "1",
    "sort": 1,
    "parentId": 0,
    "children": [
      // {
      //   "id": 2,
      //   "code": "M_APPSYSTEM_MANAGE",
      //   "prvgCode": "S_APP_INFO",
      //   "name": "应用系统管理",
      //   "source": "el-icon-setting",
      //   "path": "/common/systemManage/appManage/index",
      //   "openType": "1",
      //   "sort": 1,
      //   "parentId": 1,
      //   "children": []
      // },
      // {
      //   "id": 3,
      //   "code": "M_DICT_MANAGE",
      //   "prvgCode": "S_DICT_MANAGE",
      //   "name": "数据字典管理",
      //   "source": "el-icon-s-tools",
      //   "path": "/common/systemManage/dictManage",
      //   "openType": "1",
      //   "sort": 2,
      //   "parentId": 1,
      //   "children": [
      //     {
      //       "id": 4,
      //       "code": "M_DICT_MANAG1",
      //       "prvgCode": "S_DICT_TYPE",
      //       "name": "字典类别管理",
      //       "source": "el-icon-pie-chart",
      //       "path": "/common/systemManage/dictManage/dictType/index",
      //       "openType": "1",
      //       "sort": 1,
      //       "parentId": 3,
      //       "children": []
      //     },
      //     {
      //       "id": 5,
      //       "code": "M_DICTINFO_MANAGE",
      //       "prvgCode": "S_DICT_INFO",
      //       "name": "字典信息管理",
      //       "source": "el-icon-chat-line-square",
      //       "path": "/common/systemManage/dictManage/dictInfo/index",
      //       "openType": "1",
      //       "sort": 2,
      //       "parentId": 3,
      //       "children": []
      //     }
      //   ]
      // },
      // {
      //   "id": 6,
      //   "code": "M_SYSCONFIG_MANAGE",
      //   "prvgCode": "S_SYS_PARAM",
      //   "name": "系统参数管理",
      //   "source": "icon-shuju",
      //   "path": "/common/systemManage/sysConfigManage/index",
      //   "openType": "1",
      //   "sort": 3,
      //   "parentId": 1,
      //   "children": []
      // },
      // {
      //   "id": 7,
      //   "code": "M_GROUP_MANAGE",
      //   "prvgCode": "S_ORG_MANAGE",
      //   "name": "组织机构管理",
      //   "source": "icon-bumen2",
      //   "path": "/common/systemManage/orgManage/index",
      //   "openType": "1",
      //   "sort": 4,
      //   "parentId": 1,
      //   "children": []
      // },
      // {
      //   "id": 8,
      //   "code": "M_DEPT_MANAGE",
      //   "prvgCode": "S_DEPT_MANAGE",
      //   "name": "部门管理",
      //   "source": "icon-yonghuzu1",
      //   "path": "/common/systemManage/deptManage/index",
      //   "openType": "1",
      //   "sort": 5,
      //   "parentId": 1,
      //   "children": []
      // },
      {
        "id": 9,
        "code": "M_PRIVILEGE_MANAGE",
        "prvgCode": "S_PRVG_MANAGE",
        "name": "部门用户管理",
        "source": "icon-bumen2",
        "path": "/common/systemManage/deptUserManage",
        "openType": "1",
        "sort": 6,
        "parentId": 1,
        "children": [
          {
            "id": 10,
            "code": "M_MOUDLEINFO_MANAGE",
            "prvgCode": "S_PVRG_INFO",
            "name": "部门管理",
            "source": "icon-yonghuzu1",
            "path": "/common/systemManage/deptUserManage/deptManage/index",
            "openType": "1",
            "sort": 1,
            "parentId": 9,
            "children": []
          },
          {
            "id": 11,
            "code": "M_MODULESERVICE_MANAGE",
            "prvgCode": "S_PRVG_FUNC",
            "name": "用户管理",
            "source": "icon-jiaose",
            "path": "/common/systemManage/deptUserManage/userManage/index",
            "openType": "1",
            "sort": 2,
            "parentId": 9,
            "children": []
          }
        ]
      },
      {
        "id": 9,
        "code": "M_PRIVILEGE_MANAGE",
        "prvgCode": "S_PRVG_MANAGE",
        "name": "权限管理",
        "source": "el-icon-unlock",
        "path": "/common/systemManage/privilegeManage",
        "openType": "1",
        "sort": 6,
        "parentId": 1,
        "children": [
          {
            "id": 10,
            "code": "M_MOUDLEINFO_MANAGE",
            "prvgCode": "S_PVRG_INFO",
            "name": "用户组管理",
            "source": "icon-shuju",
            "path": "/common/systemManage/privilegeManage/userGroupManage/index",
            "openType": "1",
            "sort": 1,
            "parentId": 9,
            "children": []
          },
          {
            "id": 11,
            "code": "M_MODULESERVICE_MANAGE",
            "prvgCode": "S_PRVG_FUNC",
            "name": "用户权限",
            "source": "icon-user",
            "path": "/common/systemManage/privilegeManage/userPrivilegeMange/index",
            "openType": "1",
            "sort": 2,
            "parentId": 9,
            "children": []
          }
        ]
      },
      {
        "id": 9,
        "code": "M_PRIVILEGE_MANAGE",
        "prvgCode": "S_PRVG_MANAGE",
        "name": "日志管理",
        "source": "el-icon-pie-chart",
        "path": "/common/systemManage/logsManage",
        "openType": "1",
        "sort": 6,
        "parentId": 1,
        "children": [
          {
            "id": 10,
            "code": "M_MOUDLEINFO_MANAGE",
            "prvgCode": "S_PVRG_INFO",
            "name": "日志查询",
            "source": "el-icon-chat-line-square",
            "path": "/common/systemManage/logsManage/logsQuery/index",
            "openType": "1",
            "sort": 1,
            "parentId": 9,
            "children": []
          },
        ]
      },
      // {
      //   "id": 12,
      //   "code": "M_MENU_MANAGE",
      //   "prvgCode": "S_MENU_MANAGE",
      //   "name": "菜单管理",
      //   "source": "el-icon-menu",
      //   "path": "/common/systemManage/menuManage/index",
      //   "openType": "1",
      //   "sort": 7,
      //   "parentId": 1,
      //   "children": []
      // },
      // {
      //   "id": 13,
      //   "code": "M_ROLE_MANAGE",
      //   "prvgCode": "S_ROLE_MANAGE",
      //   "name": "角色管理",
      //   "source": "icon-jiaose",
      //   "path": "/common/systemManage/roleManage/index",
      //   "openType": "1",
      //   "sort": 8,
      //   "parentId": 1,
      //   "children": []
      // },
      // {
      //   "id": 14,
      //   "code": "M_USER_MANAGE",
      //   "prvgCode": "S_USER_MANAGE",
      //   "name": "用户管理",
      //   "source": "icon-user",
      //   "path": "/common/systemManage/userManage/index",
      //   "openType": "1",
      //   "sort": 9,
      //   "parentId": 1,
      //   "children": []
      // },
      // {
      //   "id": 15,
      //   "code": "M_PLUGIN_MANAGE",
      //   "prvgCode": "S_CONTROL_MANAGE",
      //   "name": "控件管理",
      //   "source": "el-icon-s-grid",
      //   "path": "/common/systemManage/pluginManage/index",
      //   "openType": "1",
      //   "sort": 10,
      //   "parentId": 1,
      //   "children": []
      // },
      // {
      //   "id": 89,
      //   "code": "M_CACHE_MANAGE",
      //   "prvgCode": "S_CACHE_MANAGE",
      //   "name": "缓存管理",
      //   "source": "icon-weihu",
      //   "path": "/common/systemManage/cacheManage/index",
      //   "openType": "1",
      //   "sort": 10,
      //   "parentId": 1,
      //   "children": []
      // }
    ]
  }
]