import * as API from './'
// import { axios } from '@/utils/request'
import axios from 'axios'
export default {
  login: params=>{
    return API.POST_OAUTH('api-oauth/question/oauth/token',params)
  },

/*  test: params=>{
    // return API.GET_OAUTH('api-admin/demo/admin',params)
    return API.GET_OAUTH('api-admin/menu/menuTree',params)
  },*/
}
/*export function login (params) {
  return axios({
    url: 'http://localhost:8002/api-oauth/question/oauth/token',
    auth: {
      username: 'admin',
      password: '123456',
      grant_type: 'password'
    },
   /!* headers: {
      // 'Authorization': 'Bearer ' + token,
      'Content-Type':'application/json'
    },*!/
    /!*headers: {
      'Authorization': 'Basic Auth'
    },*!/
    /!*data: params,
    grant_type: 'password',*!/
    params: { grant_type: 'password',password:'123456',
      username:'user' },
    method: 'post'
  })
}*/


