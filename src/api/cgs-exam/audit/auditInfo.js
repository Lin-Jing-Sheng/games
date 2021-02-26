import request from '@/router/axios';
import { baseUrl } from '@/config/env';




export  const  view = (id) => {
  return request({
    url: baseUrl + '/auditInfo/view?id='+id,
    method: 'get'
  })
}


