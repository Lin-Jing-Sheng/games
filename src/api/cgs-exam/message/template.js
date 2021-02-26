import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查询信息模板
export const queryMessageTemps = (params) => {
  return request({
    url: baseUrl+'/message/queryMessageTemps',
    method: 'post',
    data:params
  })
}

//获取模板列表
export const getMsgTempList = (params) => {
  return request({
    url: baseUrl+'/message/getMsgTempList',
    method: 'get',
    data:params
  })
}

//查询模板详情
export const getById = (params) => {
  return request({
    url: baseUrl+`/message/getById?id=${params}`,
    method: 'get',
    // data:params
  })
}

//增加信息模板
export const addMessageTemp = (params) => {
    return request({
      url: baseUrl+'/message/addMessageTemp',
      method: 'post',
      data:params
    })
}

  //编辑信息模板
export const updateMessageTemp = (params) => {
    return request({
      url: baseUrl+'/message/updateMessageTemp',
      method: 'post',
      data:params
    })
}

//单条/批量禁用模板状态
export const disableMessageTemp = (params) => {
    return request({
      url: baseUrl+'/message/disableMessageTemp',
      method: 'post',
      data:params
    })
}

//单条/批量启用模板状态
export const enableMessageTemp = (params) => {
    return request({
      url: baseUrl+'/message/enableMessageTemp',
      method: 'post',
      data:params
    })
}