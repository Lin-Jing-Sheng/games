import request from '@/router/axios';
import { baseUrl } from '@/config/env';

export  const  getAppInfoSelect = (params) => {
  return request({
    url: baseUrl + '/appInfo/getSelect?state=0',
    method: 'get',
    params:params
  })
}

export  const  getRoleInfoSelect = (params) => {
  return request({
    url: baseUrl + '/roleInfo/getSelect',
    method: 'get',
    params:params
  })
}

export  const  getPrvgFuncTree = (id) => {
  return request({
    url: baseUrl + '/prvgFunc/getTreeData?appId='+id,
    method: 'get',
  })
}

export  const  getPrvgFuncByRoleId = (id) => {
  return request({
    url: baseUrl + '/roleInfo/getPrvgFunc?roleId='+id,
    method: 'get',
  })
}

export  const  getUserByRole = (id) => {
  return request({
    url: baseUrl + '/userInfo/getValidSelectByRole?roleId='+id,
    method: 'get',
  })
}

export  const  add = (params) => {
  return request({
    url: baseUrl + '/roleInfo/add',
    method: 'post',
    data:params
  })
}

export  const  grant = (params) => {
  return request({
    url: baseUrl + '/roleInfo/grant',
    method: 'get',
    params:params
  })
}

export  const  assign = (params) => {
  return request({
    url: baseUrl + '/roleInfo/assign',
    method: 'get',
    params:params
  })
}

export  const  view = (id) => {
  return request({
    url: baseUrl + '/roleInfo/get?id='+id,
    method: 'get',
  })
}



export  const  update = (params) => {
  return request({
    url: baseUrl + '/roleInfo/update',
    method: 'post',
    data:params
  })
}


export  const  enable = (ids) => {
  return request({
    url: baseUrl + '/roleInfo/enable?ids='+ids,
    method: 'post',
  })
}


export  const  disable = (ids) => {
  return request({
    url: baseUrl + '/roleInfo/disable?ids='+ids,
    method: 'get',
  })
}

