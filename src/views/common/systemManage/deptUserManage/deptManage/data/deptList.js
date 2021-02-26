 export default {
   data: [
      {
        value: '1',
        label: '徐闻港'
      }, {
        value: '2',
        label: '财务部'
      }, {
        value: '3',
        label: '票务部'
      }, {
        value: '4',
        label: '售票部'
      }, {
        value: '5',
        label: '调度中心'
      }, {
        value: '6',
        label: '开发单位'
      },
   ]
 }

 const zuzhi = {
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
