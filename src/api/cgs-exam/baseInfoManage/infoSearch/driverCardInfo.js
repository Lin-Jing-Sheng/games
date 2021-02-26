import request from '@/router/axios';
import {baseUrl} from '@/config/env';

//查看驾驶人详情
export const getLicenseDetail = (params) => {
  return request({
    url: baseUrl+`/drive/getLicenseDetail?id=${params}`,
    method: 'get',
   
  })
}

// 同步数据
export const syncLicense = (params) => {
    return request({
      url: baseUrl+`/drive/syncLicense?sfzmhm=${params}`,
      method: 'get',
    })
  }

