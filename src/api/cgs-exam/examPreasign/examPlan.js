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

export  const  getEditBeforeDays = () => {
  return request({
    url: baseUrl + '/examPlan/getEditBeforeDays',
    method: 'get',
  })
}

//获得siteInfo的下拉框
export  const  getMaxExamNum = (siteCode) => {
  return request({
    url: baseUrl + '/siteInfo/getMaxExamNum?siteCode='+siteCode,
    method: 'get',
  })
}

export  const  getPlanTempSelect = (params) => {
  return request({
    url: baseUrl + '/examPlanTemp/getSelect',
    method: 'get',
    params:params
  })
}

export  const  listTempDetail = (tempId) => {
  return request({
    url: baseUrl + '/examPlanTempDetail/listTempDetail?tempId='+tempId,
    method: 'get',
  })
}

export  const  listPlanDetail = (planId) => {
  return request({
    url: baseUrl + '/examPlanDetail/listPlanDetail?planId='+planId,
    method: 'get',
  })
}

export  const  assignPlan = () => {
  return request({
    url: baseUrl + '/examPlan/assignPlan',
    method: 'get',
  })
}

export  const  add = (params) => {
  return request({
    url: baseUrl + '/examPlan/add',
    method: 'post',
    data:params
  })
}
export  const  addDetail = (params) => {
  return request({
    url: baseUrl + '/examPlanDetail/add',
    method: 'post',
    data:params
  })
}

export  const  view = (id) => {
  return request({
    url: baseUrl + '/examPlan/get?id='+id,
    method: 'get',
  })
}



export  const  update = (params) => {
  return request({
    url: baseUrl + '/examPlan/update',
    method: 'post',
    data:params
  })
}
export  const  updateDetail = (params) => {
  return request({
    url: baseUrl + '/examPlanDetail/update',
    method: 'post',
    data:params
  })
}

export  const  enable = (id) => {
  return request({
    url: baseUrl + '/examPlan/enable?id='+id,
    method: 'post',
  })
}




export  const  disable = (ids) => {
  return request({
    url: baseUrl + '/examPlan/disable?ids='+ids,
    method: 'get',
  })
}
export  const  disableDetail = (id) => {
  return request({
    url: baseUrl + '/examPlanDetail/disable?id='+id,
    method: 'get',
  })
}
