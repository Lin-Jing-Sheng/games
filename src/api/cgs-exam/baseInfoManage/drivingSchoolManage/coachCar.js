import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//根据条件查询教练车列表
export const queryList = (params) => {
    return request({
      url: baseUrl+`/trainVehicle/queryList`,
      method: 'get',
      data:params
    })
  }

//查询教练车详情
export const getCoachDetail = (params) => {
  return request({
    url: baseUrl+`/trainVehicle/getById?id=${params}`,
    method: 'get',
   
  })
}
