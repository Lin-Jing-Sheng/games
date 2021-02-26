import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查看驾驶人详情
export const getPersonDetail = (params) => {
  return request({
    url: baseUrl+`/drive/getPersonDetail?id=${params}`,
    method: 'get',
   
  })
}

//同步数据
export const syncPerson = (params) => {
    return request({
      url: baseUrl+`/drive/syncPerson?sfzmhm=${params}`,
      method: 'get',
    })
  }

