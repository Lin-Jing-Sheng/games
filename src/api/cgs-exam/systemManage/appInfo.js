import request from '@/router/axios';
import { baseUrl } from '@/config/env';


//获得appinfo的下拉框
export  const  getAppInfoSelect = (params) => {
  return request({
    url: baseUrl + '/appInfo/getSelect',
    method: 'post',
    data:params
  })
}

export  const  add = (params) => {
  return request({
    url: baseUrl + '/appInfo/add',
    method: 'post',
    data:params
  })
}


export  const  view = (id) => {
  return request({
    url: baseUrl + '/appInfo/get?id='+id,
    method: 'get',
  })
}



export  const  update = (params) => {
  return request({
    url: baseUrl + '/appInfo/update',
    method: 'post',
    data:params
  })
}


export  const  enable = (ids) => {
  return request({
    url: baseUrl + '/appInfo/enable?ids='+ids,
    method: 'post',
  })
}




export  const  disable = (ids) => {
  return request({
    url: baseUrl + '/appInfo/disable?ids='+ids,
    method: 'get',
  })
}

