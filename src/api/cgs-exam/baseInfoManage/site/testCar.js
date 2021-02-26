import request from '@/router/axios';
import {baseUrl} from '@/config/env';



//获得siteInfo的下拉框
export  const  getSiteInfoSelect = (params) => {
  return request({
    url: baseUrl + '/siteInfo/getSelect',
    method: 'get',
    params:params
  })
}

//新增考试车辆
export const add = (params) => {
  return request({
    url: baseUrl+'/examVehicle/add',
    method: 'post',
    data:params
  })
}

// 编辑考试车辆
export const edit = (params) => {
    return request({
      url: baseUrl+`/examVehicle/edit`,
      method: 'post',
    })
}

// 查询考试车辆详情
export const getById = (params) => {
    return request({
      url: baseUrl+`/examVehicle/getById?id=${params}`,
      method: 'get',
    })
}

// 单条/批量禁用考试车辆
export const disable = (params) => {
    return request({
      url: baseUrl+`/examVehicle/disable`,
      method: 'post',
      data:params
    })
}

// 单条/批量启用考试车辆
export const enable = (params) => {
    return request({
      url: baseUrl+`/examVehicle/enable`,
      method: 'post',
      data:params
    })
}


