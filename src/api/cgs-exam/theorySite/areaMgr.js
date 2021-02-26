import request from '@/router/axios';
import { baseUrl } from '@/config/env';


//获得siteInfo的下拉框
export  const  getSiteInfoSelect = (params) => {
  return request({
    url: baseUrl + '/siteInfo/getSelect',
    method: 'get',
    params:params
  })
}

//获得考场区域的下拉框
export  const  getAreaSelect = (siteCode) => {
  return request({
    url: baseUrl + '/theoryArea/getSelect?siteCode='+siteCode,
    method: 'get',
  })
}
//获得theorySite的下拉框
export  const  getTheorySiteSelect = (params) => {
  return request({
    url: baseUrl + '/theorySite/getSelect',
    method: 'get',
    params:params
  })
}

export  const  add = (params) => {
  return request({
    url: baseUrl + '/theoryAreaMgr/add',
    method: 'get',
    params:params
  })
}
export  const  addRandom = (params) => {
  return request({
    url: baseUrl + '/theoryAreaMgr/addRandom',
    method: 'get',
    params:params
  })
}
export  const  listBySite = (siteCode) => {
  return request({
    url: baseUrl + '/theorySeat/listBySiteCode?siteCode='+siteCode,
    method: 'get'
  })
}

export  const  listAssignBySite = (params) => {
  return request({
    url: baseUrl + '/theoryAreaMgr/list',
    method: 'get',
    params:params
  })
}
export  const  listAssignAll = (siteCode) => {
  return request({
    url: baseUrl + '/theoryAreaMgr/listAll?siteCode='+siteCode,
    method: 'get',
  })
}

export  const  cancel = (params) => {
  return request({
    url: baseUrl + '/theoryAreaMgr/cancel',
    method: 'get',
    params:params
  })
}
export  const  cancelRandom = (params) => {
  return request({
    url: baseUrl + '/theoryAreaMgr/cancelRandom',
    method: 'get',
    params:params
  })
}
