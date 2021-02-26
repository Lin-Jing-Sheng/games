import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查看业务退办详情
export const getQuitDetail = (param) => {
  return request({
    url: baseUrl+`/drive/getQuitDetail?id=${param}`,
    method: 'get',
   
  })
}

// 同步数据
export const syncQuit = (params) => {
    return request({
      url: baseUrl+`/drive/syncQuit?lsh=${params}`,
      method: 'get',
    })
}

