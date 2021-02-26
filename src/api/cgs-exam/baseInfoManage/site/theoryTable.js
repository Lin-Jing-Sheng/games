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

//新增考试台
export const add = (params) => {
  return request({
    url: baseUrl+'/theorySeat/add',
    method: 'post',
    data:params
  })
}

// 编辑考试台
export const edit = (params) => {
    return request({
      url: baseUrl+`/theorySeat/edit`,
      method: 'post',
      data:params
    })
}

// 查询考试台详情
export const getById = (params) => {
    return request({
      url: baseUrl+`/theorySeat/getById?id=${params}`,
      method: 'get',
    })
}

// 单条/批量禁用考试台
export const disable = (params) => {
    return request({
      url: baseUrl+`/theorySeat/disable`,
      method: 'post',
      data:params
    })
}

// 单条/批量启用考试台
export const enable = (params) => {
    return request({
      url: baseUrl+`/theorySeat/enable`,
      method: 'post',
      data:params
    })
}


