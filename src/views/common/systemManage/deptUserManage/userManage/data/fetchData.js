const getTreeData = {
  "success": true,
  "stateCode": 200,
  "retCode": "M_ORG_INFO_109",
  "retMsg": "查询成功",
  "body": [
    {
      "id": 1,
      "label": "车管所",
      "parentId": 0,
      "ifLeaf": false,
      "children": [
        {
          "id": 7,
          "label": "管理科",
          "parentId": 1,
          "ifLeaf": false,
          "children": null,
          "orderNum": null
        },
        {
          "id": 2,
          "label": "考试科",
          "parentId": 1,
          "ifLeaf": false,
          "children": [
            {
              "id": 5,
              "label": "10L",
              "parentId": 2,
              "ifLeaf": false,
              "children": null,
              "orderNum": null
            }
          ],
          "orderNum": null
        },
        {
          "id": 3,
          "label": "机管科",
          "parentId": 1,
          "ifLeaf": false,
          "children": [
            {
              "id": 6,
              "label": "9L",
              "parentId": 3,
              "ifLeaf": false,
              "children": null,
              "orderNum": null
            }
          ],
          "orderNum": null
        }
      ],
      "orderNum": null
    }
  ]
}

const getSelect = {
  "success": true,
  "stateCode": 200,
  "retCode": "M_DICT_TYPE_109",
  "retMsg": "查询成功",
  "body": [
    {
      "label": "状态测试1",
      "value": 12
    },
    {
      "label": "开发部",
      "value": 6
    },
    {
      "label": "222",
      "value": 8
    },
    {
      "label": "123",
      "value": 13
    },
    {
      "label": "测试2",
      "value": 4
    },
    {
      "label": "测试部门12",
      "value": 2
    },
    {
      "label": "测试部门2",
      "value": 3
    },
    {
      "label": "警视通小组",
      "value": 5
    }
  ]
}

const getUserSelect = {
  "success": true,
  "stateCode": 200,
  "retCode": "M_USER_INFO_109",
  "retMsg": "查询成功",
  "body": [
    {
      "label": "李建",
      "value": 2
    },
    {
      "label": "12312312",
      "value": 9
    },
    {
      "label": "123123",
      "value": 12
    },
    {
      "label": "9527",
      "value": 17
    },
    {
      "label": "12312312312341231",
      "value": 10
    },
    {
      "label": "512312312",
      "value": 11
    },
    {
      "label": "黄竹彬",
      "value": 14
    },
    {
      "label": "4123123",
      "value": 19
    },
    {
      "label": "4123123",
      "value": 20
    },
    {
      "label": "测试0912",
      "value": 22
    },
    {
      "label": "测试用户001",
      "value": 3
    },
    {
      "label": "测试用户",
      "value": 4
    },
    {
      "label": "肖申强",
      "value": 6
    },
    {
      "label": "123123123",
      "value": 8
    },
    {
      "label": "李博宇",
      "value": 18
    },
    {
      "label": "512312312",
      "value": 21
    },
    {
      "label": "测试用户3",
      "value": 13
    },
    {
      "label": "李琴",
      "value": 5
    },
    {
      "label": "孙思畅",
      "value": 16
    }
  ]
}

const list = {
  "success": true,
  "stateCode": 200,
  "retCode": "M_USER_INFO_108",
  "retMsg": "查询成功",
  "body": {
    "total": 19,
    "data": [
      {
        "pageNo": 1,
        "pageSize": 10,
        "order": "ASC",
        "orderBy": "id",
        "startRowNum": 1,
        "endRowNum": 11,
        "id": 2,
        "userCode": "lijian",
        "userName": "李建",
        "password": null,
        "userIdCard": null,
        "userPhone": null,
        "accExpiryDate": "2021-06-21 21:14:44",
        "pwdExpiryDate": "2021-05-03 19:32:53",
        "loginType": "1",
        "ifFace": null,
        "ifMsg": null,
        "ifIpLimit": null,
        "ipAddr": null,
        "userState": "0",
        "remark": "1",
        "inputTime": null,
        "inputUser": null,
        "updateTime": null,
        "deptId": null,
        "userPhoto": null,
        "userPhotoStr": null,
        "deptName": "警视通小组",
        "orgName": "10楼办公室",
        "orgShortName": "10L",
        "accExpiryDateBegin": null,
        "accExpiryDateEnd": null,
        "pwdExpiryDateBegin": null,
        "pwdExpiryDateEnd": null,
        "pageVo": {
          "records": [],
          "total": 0,
          "size": 10,
          "current": 1,
          "orders": [],
          "optimizeCountSql": true,
          "hitCount": false,
          "searchCount": true,
          "pages": 0
        }
      },
      {
        "pageNo": 1,
        "pageSize": 10,
        "order": "ASC",
        "orderBy": "id",
        "startRowNum": 1,
        "endRowNum": 11,
        "id": 3,
        "userCode": "test001",
        "userName": "测试用户001",
        "password": null,
        "userIdCard": null,
        "userPhone": null,
        "accExpiryDate": "2022-12-01 00:00:00",
        "pwdExpiryDate": "2022-12-01 00:00:00",
        "loginType": "1",
        "ifFace": null,
        "ifMsg": null,
        "ifIpLimit": null,
        "ipAddr": null,
        "userState": "0",
        "remark": null,
        "inputTime": null,
        "inputUser": null,
        "updateTime": null,
        "deptId": null,
        "userPhoto": null,
        "userPhotoStr": null,
        "deptName": "警视通小组",
        "orgName": "10楼办公室",
        "orgShortName": "10L",
        "accExpiryDateBegin": null,
        "accExpiryDateEnd": null,
        "pwdExpiryDateBegin": null,
        "pwdExpiryDateEnd": null,
        "pageVo": {
          "records": [],
          "total": 0,
          "size": 10,
          "current": 1,
          "orders": [],
          "optimizeCountSql": true,
          "hitCount": false,
          "searchCount": true,
          "pages": 0
        }
      },
      {
        "pageNo": 1,
        "pageSize": 10,
        "order": "ASC",
        "orderBy": "id",
        "startRowNum": 1,
        "endRowNum": 11,
        "id": 4,
        "userCode": "test",
        "userName": "测试用户",
        "password": null,
        "userIdCard": null,
        "userPhone": null,
        "accExpiryDate": "2021-12-11 15:52:57",
        "pwdExpiryDate": "2021-12-11 15:52:57",
        "loginType": "1",
        "ifFace": null,
        "ifMsg": null,
        "ifIpLimit": null,
        "ipAddr": null,
        "userState": "0",
        "remark": null,
        "inputTime": null,
        "inputUser": null,
        "updateTime": null,
        "deptId": null,
        "userPhoto": null,
        "userPhotoStr": null,
        "deptName": "警视通小组",
        "orgName": "10楼办公室",
        "orgShortName": "10L",
        "accExpiryDateBegin": null,
        "accExpiryDateEnd": null,
        "pwdExpiryDateBegin": null,
        "pwdExpiryDateEnd": null,
        "pageVo": {
          "records": [],
          "total": 0,
          "size": 10,
          "current": 1,
          "orders": [],
          "optimizeCountSql": true,
          "hitCount": false,
          "searchCount": true,
          "pages": 0
        }
      },
      {
        "pageNo": 1,
        "pageSize": 10,
        "order": "ASC",
        "orderBy": "id",
        "startRowNum": 1,
        "endRowNum": 11,
        "id": 5,
        "userCode": "liqin",
        "userName": "李琴",
        "password": null,
        "userIdCard": null,
        "userPhone": null,
        "accExpiryDate": "2021-06-15 21:15:37",
        "pwdExpiryDate": "2021-04-07 11:22:57",
        "loginType": "1",
        "ifFace": null,
        "ifMsg": null,
        "ifIpLimit": null,
        "ipAddr": null,
        "userState": "0",
        "remark": null,
        "inputTime": null,
        "inputUser": null,
        "updateTime": null,
        "deptId": null,
        "userPhoto": null,
        "userPhotoStr": null,
        "deptName": "警视通小组",
        "orgName": "10楼办公室",
        "orgShortName": "10L",
        "accExpiryDateBegin": null,
        "accExpiryDateEnd": null,
        "pwdExpiryDateBegin": null,
        "pwdExpiryDateEnd": null,
        "pageVo": {
          "records": [],
          "total": 0,
          "size": 10,
          "current": 1,
          "orders": [],
          "optimizeCountSql": true,
          "hitCount": false,
          "searchCount": true,
          "pages": 0
        }
      },
      {
        "pageNo": 1,
        "pageSize": 10,
        "order": "ASC",
        "orderBy": "id",
        "startRowNum": 1,
        "endRowNum": 11,
        "id": 6,
        "userCode": "xsq",
        "userName": "肖申强",
        "password": null,
        "userIdCard": null,
        "userPhone": null,
        "accExpiryDate": "2021-12-17 18:30:21",
        "pwdExpiryDate": "2021-12-17 18:30:21",
        "loginType": "1",
        "ifFace": null,
        "ifMsg": null,
        "ifIpLimit": null,
        "ipAddr": null,
        "userState": "0",
        "remark": null,
        "inputTime": null,
        "inputUser": null,
        "updateTime": null,
        "deptId": null,
        "userPhoto": null,
        "userPhotoStr": null,
        "deptName": "警视通小组",
        "orgName": "10楼办公室",
        "orgShortName": "10L",
        "accExpiryDateBegin": null,
        "accExpiryDateEnd": null,
        "pwdExpiryDateBegin": null,
        "pwdExpiryDateEnd": null,
        "pageVo": {
          "records": [],
          "total": 0,
          "size": 10,
          "current": 1,
          "orders": [],
          "optimizeCountSql": true,
          "hitCount": false,
          "searchCount": true,
          "pages": 0
        }
      },
      {
        "pageNo": 1,
        "pageSize": 10,
        "order": "ASC",
        "orderBy": "id",
        "startRowNum": 1,
        "endRowNum": 11,
        "id": 8,
        "userCode": "123123",
        "userName": "123123123",
        "password": null,
        "userIdCard": null,
        "userPhone": null,
        "accExpiryDate": "2021-06-16 20:05:45",
        "pwdExpiryDate": "2021-03-18 20:05:45",
        "loginType": "1",
        "ifFace": null,
        "ifMsg": null,
        "ifIpLimit": null,
        "ipAddr": null,
        "userState": "3",
        "remark": "123123",
        "inputTime": null,
        "inputUser": null,
        "updateTime": null,
        "deptId": null,
        "userPhoto": null,
        "userPhotoStr": null,
        "deptName": "测试2",
        "orgName": "车管所管理科",
        "orgShortName": "管理科",
        "accExpiryDateBegin": null,
        "accExpiryDateEnd": null,
        "pwdExpiryDateBegin": null,
        "pwdExpiryDateEnd": null,
        "pageVo": {
          "records": [],
          "total": 0,
          "size": 10,
          "current": 1,
          "orders": [],
          "optimizeCountSql": true,
          "hitCount": false,
          "searchCount": true,
          "pages": 0
        }
      },
      {
        "pageNo": 1,
        "pageSize": 10,
        "order": "ASC",
        "orderBy": "id",
        "startRowNum": 1,
        "endRowNum": 11,
        "id": 9,
        "userCode": "4123123",
        "userName": "12312312",
        "password": null,
        "userIdCard": null,
        "userPhone": null,
        "accExpiryDate": "2021-06-16 21:20:32",
        "pwdExpiryDate": "2021-03-18 21:20:32",
        "loginType": "1",
        "ifFace": null,
        "ifMsg": null,
        "ifIpLimit": null,
        "ipAddr": null,
        "userState": "2",
        "remark": "123123",
        "inputTime": null,
        "inputUser": null,
        "updateTime": null,
        "deptId": null,
        "userPhoto": null,
        "userPhotoStr": null,
        "deptName": "测试2",
        "orgName": "车管所管理科",
        "orgShortName": "管理科",
        "accExpiryDateBegin": null,
        "accExpiryDateEnd": null,
        "pwdExpiryDateBegin": null,
        "pwdExpiryDateEnd": null,
        "pageVo": {
          "records": [],
          "total": 0,
          "size": 10,
          "current": 1,
          "orders": [],
          "optimizeCountSql": true,
          "hitCount": false,
          "searchCount": true,
          "pages": 0
        }
      },
      {
        "pageNo": 1,
        "pageSize": 10,
        "order": "ASC",
        "orderBy": "id",
        "startRowNum": 1,
        "endRowNum": 11,
        "id": 10,
        "userCode": "4123123123123",
        "userName": "12312312312341231",
        "password": null,
        "userIdCard": null,
        "userPhone": null,
        "accExpiryDate": "2021-06-16 21:42:10",
        "pwdExpiryDate": "2021-03-18 21:42:10",
        "loginType": "1",
        "ifFace": null,
        "ifMsg": null,
        "ifIpLimit": null,
        "ipAddr": null,
        "userState": "3",
        "remark": "12312",
        "inputTime": null,
        "inputUser": null,
        "updateTime": null,
        "deptId": null,
        "userPhoto": null,
        "userPhotoStr": null,
        "deptName": "开发部",
        "orgName": "车管所考试科",
        "orgShortName": "考试科",
        "accExpiryDateBegin": null,
        "accExpiryDateEnd": null,
        "pwdExpiryDateBegin": null,
        "pwdExpiryDateEnd": null,
        "pageVo": {
          "records": [],
          "total": 0,
          "size": 10,
          "current": 1,
          "orders": [],
          "optimizeCountSql": true,
          "hitCount": false,
          "searchCount": true,
          "pages": 0
        }
      },
      {
        "pageNo": 1,
        "pageSize": 10,
        "order": "ASC",
        "orderBy": "id",
        "startRowNum": 1,
        "endRowNum": 11,
        "id": 11,
        "userCode": "413541312312",
        "userName": "512312312",
        "password": null,
        "userIdCard": null,
        "userPhone": null,
        "accExpiryDate": "2021-06-16 21:49:13",
        "pwdExpiryDate": "2021-03-18 21:49:13",
        "loginType": "1",
        "ifFace": null,
        "ifMsg": null,
        "ifIpLimit": null,
        "ipAddr": null,
        "userState": "2",
        "remark": null,
        "inputTime": null,
        "inputUser": null,
        "updateTime": null,
        "deptId": null,
        "userPhoto": null,
        "userPhotoStr": null,
        "deptName": "测试2",
        "orgName": "车管所管理科",
        "orgShortName": "管理科",
        "accExpiryDateBegin": null,
        "accExpiryDateEnd": null,
        "pwdExpiryDateBegin": null,
        "pwdExpiryDateEnd": null,
        "pageVo": {
          "records": [],
          "total": 0,
          "size": 10,
          "current": 1,
          "orders": [],
          "optimizeCountSql": true,
          "hitCount": false,
          "searchCount": true,
          "pages": 0
        }
      },
      {
        "pageNo": 1,
        "pageSize": 10,
        "order": "ASC",
        "orderBy": "id",
        "startRowNum": 1,
        "endRowNum": 11,
        "id": 12,
        "userCode": "4131235asd",
        "userName": "123123",
        "password": null,
        "userIdCard": null,
        "userPhone": null,
        "accExpiryDate": "2021-06-16 22:10:48",
        "pwdExpiryDate": "2021-03-18 22:10:48",
        "loginType": "1",
        "ifFace": null,
        "ifMsg": null,
        "ifIpLimit": null,
        "ipAddr": null,
        "userState": "2",
        "remark": null,
        "inputTime": null,
        "inputUser": null,
        "updateTime": null,
        "deptId": null,
        "userPhoto": null,
        "userPhotoStr": null,
        "deptName": "测试2",
        "orgName": "车管所管理科",
        "orgShortName": "管理科",
        "accExpiryDateBegin": null,
        "accExpiryDateEnd": null,
        "pwdExpiryDateBegin": null,
        "pwdExpiryDateEnd": null,
        "pageVo": {
          "records": [],
          "total": 0,
          "size": 10,
          "current": 1,
          "orders": [],
          "optimizeCountSql": true,
          "hitCount": false,
          "searchCount": true,
          "pages": 0
        }
      }
    ]
  }
}
