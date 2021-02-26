import request from '@/router/axios';
import { baseUrl } from '@/config/env';



export  const  list = (params) => {
  return request({
    url: baseUrl + '/practicalArea/list',
    method: 'post',
    data:params
  })
}
export  const  add = (params) => {
    return request({
      url: baseUrl + '/practicalArea/add',
      method: 'post',
      data:params
    })
  }
export  const  edit = (params) => {
    return request({
        url: baseUrl + '/practicalArea/edit',
        method: 'post',
        data:params
    })
}
export  const  disable = (params) => {
    return request({
        url: baseUrl + '/practicalArea/disable',
        method: 'post',
        data:params
    })
}
export  const  enable = (params) => {
    return request({
        url: baseUrl + '/practicalArea/enable',
        method: 'post',
        data:params
    })
}
export  const  view = (params) => {
    return request({
        url: baseUrl + `/practicalArea/getById?id=${params}`,
        method: 'get',
    })
}



