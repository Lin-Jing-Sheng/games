import request from '@/router/axios';
import { baseUrl } from '@/config/env';

export  const  get = (params) => {
  return request({
    url: baseUrl + `/practicalAssign/get?id=${params}`,
    method: 'get',
  })
}

export  const  update = (params) => {
    return request({
      url: baseUrl + `/practicalAssign/update`,
      method: 'post',
      data:params
    })
  }



