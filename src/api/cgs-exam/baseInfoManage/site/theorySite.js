import request from '@/router/axios';
import {baseUrl} from '@/config/env';


export const add = (params) => {
  return request({
    url: baseUrl+'/theorySite/add',
    method: 'post',
    data:params
   
  })
}
export const edit = (params) => {
  return request({
    url: baseUrl+'/theorySite/edit',
    method: 'post',
    data:params
   
  })
}

//获得理论考场的下拉列表  
export const theorySites = (state) => {
  return request({
    url: baseUrl+'/theorySite/theorySites',
    method: 'post',
    data:{state}
  })
}


export const view = (id) => {
  return request({
    url: baseUrl+'/theorySite/view?id='+id,
    method: 'get'
  })
}


export  const  enable = (params) => {
  return request({
    url: baseUrl + '/theorySite/enable',
    method: 'post',
    data:params
  })
}




export  const  disable = (params) => {
  return request({
    url: baseUrl + '/theorySite/disable',
    method: 'post',
    data:params
  })
}

// 获取参数列表
export  const  optionList = (params) => {
  return request({
    url: baseUrl + `/siteParam/list?siteCode=${params}`,
    method: 'get',
  })
}

// 新增参数
export  const  addOption = (params) => {
  return request({
    url: baseUrl + '/siteParam/add',
    method: 'post',
    data:params
  })
}

//编辑参数
export  const  editOption = (params) => {
  return request({
    url: baseUrl + '/siteParam/edit',
    method: 'post',
    data:params
  })
}

//编辑参数
export  const  deleteOption = (params) => {
  return request({
    url: baseUrl + `/siteParam/disable?id=${params}`,
    method: 'get',
  })
}