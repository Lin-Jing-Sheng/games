import request from '@/router/axios';
import { baseUrl } from '@/config/env';

export  const  get = (params) => {
  return request({
    url: baseUrl + `/theoryAssign/get?id=${params}`,
    method: 'get',
  })
}

export  const  update = (params) => {
    return request({
      url: baseUrl + `/theoryAssign/update`,
      method: 'post',
      data:params
    })
  }



