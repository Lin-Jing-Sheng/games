import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查看打证记录详情
export const getPrintDetail = (param) => {
  return request({
    url: baseUrl+`/drive/getPrintDetail?id=${param}`,
    method: 'get',
   
  })
}

// 同步数据
export const syncPrint = (params) => {
    return request({
      url: baseUrl+`/drive/syncPrint?lsh=${params}`,
      method: 'get',
    })
}

