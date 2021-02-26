import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//条件查询短信
export const queryMsgInfos = (params) => {
  return request({
    url: baseUrl+'/message/queryMsgInfos',
    method: 'post',
    data:params
  })
}

//查看短信详情
export const getMsgInfoById = (params) => {
  return request({
    url: baseUrl+`/message/getMsgInfoById?id=${params}`,
    method: 'get',
    data:params
  })
}

// 发送短信
export const sendMessage = (params) => {
  return request({
    url: baseUrl+`/message/sendMessage`,
    method: 'post',
    data:params
  })
}

// 根据群组id查看联系人
export const getPersonsByGroupId = (params) => {
  return request({
    url: baseUrl+`/message/getPersonsByGroupId?groupId=${params}`,
    method: 'get',
  })
}