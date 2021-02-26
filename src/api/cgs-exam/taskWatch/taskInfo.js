import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查询全部任务代码
export const queryTaskLogs = (params) => {
  return request({
    url: baseUrl+'/task/queryTaskLogs',
    method: 'post',
    data:params
  })
}

//禁用定时任务
export const disableTaskInfo = (params) => {
    return request({
        url: baseUrl+'/task/disableTaskInfo',
        method: 'post',
        data:params
    })
}

//启用定时任务
export const enableTaskInfo = (params) => {
    return request({
      url: baseUrl+'/task/enableTaskInfo',
      method: 'post',
      data:params
    })
}

//获取全部定时任务列表
export const getTaskInfoList = (params) => {
    return request({
      url: baseUrl+'/task/getTaskInfoList',
      method: 'get',
    })
}

//增加定时任务
export const addTaskInfo = (params) => {
    return request({
      url: baseUrl+'/task/addTaskInfo',
      method: 'post',
      data:params
    })
}

//编辑定时任务
export const updateTaskInfo = (params) => {
    return request({
      url: baseUrl+'/task/updateTaskInfo',
      method: 'post',
      data:params
    })
}

