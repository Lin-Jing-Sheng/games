import request from '@/router/axios';
import {baseUrl} from '@/config/env';


export const add = (params) => {
    return request({
        url: baseUrl + '/servicePrvg/add',
        method: 'post',
        data: params
    })
}


export const edit = (params) => {
    return request({
        url: baseUrl + '/servicePrvg/edit',
        method: 'post',
        data: params
    })
}


export const view = (id) => {
    return request({
        url: baseUrl + '/servicePrvg/view?id=' + id,
        method: 'get',

    })
}