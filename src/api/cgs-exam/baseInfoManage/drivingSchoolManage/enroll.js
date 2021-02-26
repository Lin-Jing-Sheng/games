import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//根据条件查询报名录入列表
export const queryList = (params) => {
    return request({
      url: baseUrl+`/tempMid/queryList`,
      method: 'get',
      data:params
    })
  }

//查询报名录入详情
export const getById = (params) => {
  return request({
    url: baseUrl+`/tempMid/getById?id=${params}`,
    method: 'get',
   
  })
}

//查询报名录入详情
export const getCoachDetail = (params) => {
    return request({
      url: baseUrl+`/tempMid/add`,
      method: 'post',
      data:params
    })
  }
