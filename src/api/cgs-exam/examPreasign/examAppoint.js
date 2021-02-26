import request from '@/router/axios';
import { baseUrl } from '@/config/env';

export  const  add = (params) => {
  return request({
    url: baseUrl + '/examPreasign/add',
    method: 'post',
    data:params
  })
}

export  const  cancel = (params) => {
  return request({
    url: baseUrl + `/examPreasign/cancel`,
    method: 'post',
    data:params
  })
}

export  const  editDate = (params) => {
  return request({
    url: baseUrl + `/examPreasign/editDate`,
    method: 'post',
    data:params
  })
}

export  const  editPlan = (params) => {
  return request({
    url: baseUrl + `/examPreasign/editPlan`,
    method: 'post',
    data:params
  })
}

export  const  getSelect = (siteCode,planDate) => {
  return request({
    url: baseUrl + `/examPlan/getSelect?siteCode=${siteCode}&planDate=${planDate}`,
    method: 'get',
  })
}

export const getById = (params) => {
  return request({
    url: baseUrl + `/examPreasign/get?id=${params}`,
    method:'get',
  })
}


