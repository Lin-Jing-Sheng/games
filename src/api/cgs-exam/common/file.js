import request from '@/router/axios';
import { baseUrl } from '@/config/env';



export const downLoadFile = (id) => {
  return request({
    url: baseUrl + '/file/downloadFile',
    method: 'get',
    headers: {
      'Content-Type': 'application/json; application/octet-stream'
    },
    responseType: 'blob',
    params: {
      id
    }
  })
}










