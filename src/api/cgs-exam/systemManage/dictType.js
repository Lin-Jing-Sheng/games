import request from '@/router/axios';
import { baseUrl } from '@/config/env';

//获得appinfo的下拉框
export  const  getAppInfoSelect = (state) => {
  return request({
    url: baseUrl + '/appInfo/getSelect?state='+state,
    method: 'get',
  })
}
//获得dictType的下拉框
export  const  getDictTypeSelect = (params) => {
  return request({
    url: baseUrl + '/dictType/getSelect',
    method: 'get',
    params:params
  })
}

export  const  add = (params) => {
  return request({
    url: baseUrl + '/dictType/add',
    method: 'post',
    data:params
  })
}


export  const  view = (id) => {
  return request({
    url: baseUrl + '/dictType/get?id='+id,
    method: 'get',
  })
}



export  const  update = (params) => {
  return request({
    url: baseUrl + '/dictType/update',
    method: 'post',
    data:params
  })
}


export  const  enable = (ids) => {
  return request({
    url: baseUrl + '/dictType/enable?ids='+ids,
    method: 'post',
  })
}




export  const  disable = (ids) => {
  return request({
    url: baseUrl + '/dictType/disable?ids='+ids,
    method: 'get',
  })
}

