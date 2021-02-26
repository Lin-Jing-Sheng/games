import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//新增考试设备
export const add = (params) => {
  return request({
    url: baseUrl+'/videoDevice/add',
    method: 'post',
    data:params
  })
}

// 编辑考试设备
export const edit = (params) => {
    return request({
      url: baseUrl+`/videoDevice/edit`,
      method: 'post',
      data:params
    })
}

// 查询考试设备详情
export const getById = (params) => {
    return request({
      url: baseUrl+`/videoDevice/getById?id=${params}`,
      method: 'get',
    })
}

// 单条/批量禁用考试设备
export const disable = (params) => {
    return request({
      url: baseUrl+`/videoDevice/disable`,
      method: 'post',
      data:params
    })
}

// 单条/批量启用考试设备
export const enable = (params) => {
    return request({
      url: baseUrl+`/videoDevice/enable`,
      method: 'post',
      data:params
    })
}


