import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查询短信联系人
export const queryMessagePersons = (params) => {
  return request({
    url: baseUrl+'/message/queryMessagePersons',
    method: 'post',
    data:params
  })
}

//获取短信联系人列表
export const getMsgPersonList = (params) => {
  return request({
    url: baseUrl+'/message/getMsgPersonList',
    method: 'get',
    data:params
  })
}

//查看联系人详情
export const getMessagePersonById = (params) => {
  return request({
    url: baseUrl+`/message/getMessagePersonById?id=${params}`,
    method: 'get',
  })
}

//新增短信联系人
export const addMessagePerson = (params) => {
  return request({
    url: baseUrl+'/message/addMessagePerson',
    method: 'post',
    data:params
  })
}

//编辑短信联系人
export const updateMessagePerson = (params) => {
  return request({
    url: baseUrl+'/message/updateMessagePerson',
    method: 'post',
    data:params
  })
}

//启用短信联系人
export const enableMessagePerson = (params) => {
  return request({
    url: baseUrl+'/message/enableMessagePerson',
    method: 'post',
    data:params
  })
}

//禁用短信联系人
export const disableMessagePerson = (params) => {
  return request({
    url: baseUrl+'/message/disableMessagePerson',
    method: 'post',
    data:params
  })
}
