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
    url: baseUrl + '/practicalAreaMgr/add',
    method: 'get',
    params:params
  })
}
export  const  addRandom = (params) => {
  return request({
    url: baseUrl + '/practicalAreaMgr/addRandom',
    method: 'get',
    params:params
  })
}
export  const  listBySite = (siteCode) => {
  return request({
    url: baseUrl + '/examVehicle/listBySiteCode?siteCode='+siteCode,
    method: 'get'
  })
}

export  const  listAssignBySite = (params) => {
  return request({
    url: baseUrl + '/practicalAreaMgr/list',
    method: 'get',
    params:params
  })
}
export  const  listAssignAll = (siteCode) => {
  return request({
    url: baseUrl + '/practicalAreaMgr/listAll?siteCode='+siteCode,
    method: 'get',
  })
}

export  const  cancel = (params) => {
  return request({
    url: baseUrl + '/practicalAreaMgr/cancel',
    method: 'get',
    params:params
  })
}

