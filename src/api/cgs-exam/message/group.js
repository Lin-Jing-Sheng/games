import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//条件查询短信群组
export const queryMsgGroupInfos = (params) => {
  return request({
    url: baseUrl+'/message/queryMsgGroupInfos',
    method: 'post',
    data:params
  })
}

//获取群组列表
export const getMsgGroupList = (params) => {
  return request({
    url: baseUrl+'/message/getMsgGroupList',
    method: 'get',
    data:params
  })
}

//新增群组
export const addMsgGroupInfo = (params) => {
  return request({
    url: baseUrl+'message/addMsgGroupInfo',
    method: 'post',
    data:params
  })
}

//编辑短信联系人
export const updateMsgGroupInfo = (params) => {
  return request({
    url: baseUrl+'/message/updateMsgGroupInfo',
    method: 'post',
    data:params
  })
}

//启用群组
export const enableMsgGroupInfo = (params) => {
  return request({
    url: baseUrl+'/message/enableMsgGroupInfo',
    method: 'post',
    data:params
  })
}

//禁用群组
export const disableMsgGroupInfo = (params) => {
  return request({
    url: baseUrl+'/message/disableMsgGroupInfo',
    method: 'post',
    data:params
  })
}

//获取未加入群组联系人列表
export const getNotInGroup = (params) => {
  return request({
    url: baseUrl+'/message/getNotInGroup',
    method: 'get',
    data:params
  })
}

//获取群组待分配和已分配的联系人
export const getInGroup = (params) => {
  return request({
    url: baseUrl+`/message/getInGroup?groupId=${params}`,
    method: 'get',
    // data:params
  })
}

// //获取已经加入群组联系人列表
// export const getInGroup = (params) => {
//   return request({
//     url: baseUrl+'/message/getInGroup',
//     method: 'get',
//     data:params
//   })
// }

//获取已经加入群组联系人列表
export const msgPersonManage = (params) => {
  return request({
    url: baseUrl+'/message/msgPersonManage',
    method: 'post',
    data:params
  })
}