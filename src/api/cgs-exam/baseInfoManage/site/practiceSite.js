import request from '@/router/axios';
import {baseUrl} from '@/config/env';


export const add = (params) => {
  return request({
    url: baseUrl+'/practiceSite/add',
    method: 'post',
    data:params
   
  })
}
export const edit = (params) => {
  return request({
    url: baseUrl+'/practiceSite/edit',
    method: 'post',
    data:params
   
  })
}

//获得理论考场的下拉列表  
export const practices = (state) => {
  return request({
    url: baseUrl+'/practiceSite/practiceSites',
    method: 'post',
    data:{state}
  })
}


export const view = (id) => {
  return request({
    url: baseUrl+'/practiceSite/view?id='+id,
    method: 'get'
  })
}


export  const  enable = (params) => {
  return request({
    url: baseUrl + '/practiceSite/enable',
    method: 'post',
    data:params
  })
}




export  const  disable = (params) => {
  return request({
    url: baseUrl + '/practiceSite/disable',
    method: 'post',
    data:params
  })
}