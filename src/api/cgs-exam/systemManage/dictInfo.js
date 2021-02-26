import request from '@/router/axios';
import { baseUrl } from '@/config/env';


//获得appinfo的下拉框
export  const  getAppInfoSelect = () => {
  return request({
    url: baseUrl + '/appInfo/getSelect?state=0',
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

//获得dictInfo的下拉框
export  const  getDictInfoSelect = (params) => {
  return request({
    url: baseUrl + '/dictInfo/getSelect',
    method: 'get',
    params:params
  })
}

export  const  add = (params) => {
  return request({
    url: baseUrl + '/dictInfo/add',
    method: 'post',
    data:params
  })
}


export  const  view = (id) => {
  return request({
    url: baseUrl + '/dictInfo/get?id='+id,
    method: 'get',
  })
}



export  const  update = (params) => {
  return request({
    url: baseUrl + '/dictInfo/update',
    method: 'post',
    data:params
  })
}


export  const  enable = (ids) => {
  return request({
    url: baseUrl + '/dictInfo/enable?ids='+ids,
    method: 'post',
  })
}




export  const  disable = (ids) => {
  return request({
    url: baseUrl + '/dictInfo/disable?ids='+ids,
    method: 'get',
  })
}

