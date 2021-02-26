import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//根据条件查询驾校列表
export const queryList = (params) => {
    return request({
      url: baseUrl+`/corpInfo/queryList`,
      method: 'get',
      data:params
    })
  }

//查询驾校详情
export const getCoachDetail = (params) => {
  return request({
    url: baseUrl+`/corpInfo/getById?id=${params}`,
    method: 'get',
   
  })
}

//获取下拉框驾校列表
export const getDictSchoolInfo = (params) => {
  return request({
    url: baseUrl+`/corpInfo/getDictSchoolInfo?ifSchool=${params}`,
    method: 'get',
  })
}
