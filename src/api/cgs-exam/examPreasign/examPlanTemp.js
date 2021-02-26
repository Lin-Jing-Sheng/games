import request from '@/router/axios';
import { baseUrl } from '@/config/env';


//获得appinfo的下拉框
export  const  getSiteInfoSelect = (params) => {
  return request({
    url: baseUrl + '/siteInfo/getSelect',
    method: 'get',
    params:params
  })
}

export  const  listTempDetail = (tempId) => {
  return request({
    url: baseUrl + '/examPlanTemp/listTempDetail?tempId='+tempId,
    method: 'get',
  })
}

export  const  add = (params) => {
  return request({
    url: baseUrl + '/examPlanTemp/add',
    method: 'post',
    data:params
  })
}
export  const  addDetail = (params) => {
  return request({
    url: baseUrl + '/examPlanTempDetail/add',
    method: 'post',
    data:params
  })
}

export  const  view = (id) => {
  return request({
    url: baseUrl + '/examPlanTemp/get?id='+id,
    method: 'get',
  })
}



export  const  update = (params) => {
  return request({
    url: baseUrl + '/examPlanTemp/update',
    method: 'post',
    data:params
  })
}
export  const  updateDetail = (params) => {
  return request({
    url: baseUrl + '/examPlanTempDetail/update',
    method: 'post',
    data:params
  })
}

export  const  enable = (ids) => {
  return request({
    url: baseUrl + '/examPlanTemp/enable?ids='+ids,
    method: 'post',
  })
}




export  const  disable = (ids) => {
  return request({
    url: baseUrl + '/examPlanTemp/disable?ids='+ids,
    method: 'get',
  })
}
export  const  disableDetail = (id) => {
  return request({
    url: baseUrl + '/examPlanTempDetail/disable?id='+id,
    method: 'get',
  })
}

export  const  syncPlanNum = (id) => {
  return request({
    url: baseUrl + '/examPlanTemp/syncPlanNum?id='+id,
    method: 'get',
  })
}