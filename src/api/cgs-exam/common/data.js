import request from '@/router/axios';

export function initData(url, params) {
  return request({
    url: url,
    method: 'post',
    data:params
  })
}
