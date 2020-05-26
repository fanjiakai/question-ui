/**
 * Created by bootdo.
 */
import Env from './env';
import axios from 'axios'
import { Message } from 'element-ui'
import {
  bus
} from '../bus.js'

// axios.defaults.withCredentials = true;
//   axios.defaults.headers.common['Authorization'] = 'Basic Auth';
//  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//配置请求头

const err = (error) => {
  console.log(error)
  if (error.response) {
    /*const data = error.response.data
    //状态码
    const status = error.response.status
    const message = errorCode[status] || data.msg || errorCode['default']
    const token = Vue.ls.get(ACCESS_TOKEN)*/
    const status = error.response.status
    if (status === 401) {
      Message.error({
        message: '请重新登录',
        type: 'error'
      })
      bus.$emit('goto', '/login')
      // if (token) {
      //   store.dispatch('Logout').then(() => {
      //     setTimeout(() => {
      //       window.location.reload()
      //     }, 1500)
      //   })
      // }
    } else {
      Message({
        message: '请联系管理员',
        type: 'error'
      })
    }
    console.log(123)
    // bus.$emit('goto', '/login')
    // bus.$emit('goto', '/login')
  }
  return Promise.reject(error)
}

//添加一个请求拦截器
axios.interceptors.request.use(
  config => {
    //注释掉token校验
    // if (window.localStorage.getItem('access-token')) {
    // accessToken:'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsib3JkZXIiXSwidXNlcl9uYW1lIjoidXNlciIsInNjb3BlIjpbImFsbCJdLCJleHAiOjE1Nzg5MDAwNTQsImF1dGhvcml0aWVzIjpbIlJPTEVfTUVESVVNIiwiUk9MRV9iYmIiLCJST0xFX2FhYSIsIlJPTEVfTk9STUFMIl0sImp0aSI6IjUzN2JmYTFhLWQ1NGItNGRiMy1hY2ZlLWFmMzUzMDFhOTNhYSIsImNsaWVudF9pZCI6ImFkbWluIn0.sYKKOeAcYND6_yJKS53NfZu57_KJOMdwwej-NuLH0eU'
    // config.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsib3JkZXIiXSwidXNlcl9uYW1lIjoidXNlciIsInNjb3BlIjpbImFsbCJdLCJleHAiOjE1Nzg5MDAwNTQsImF1dGhvcml0aWVzIjpbIlJPTEVfTUVESVVNIiwiUk9MRV9iYmIiLCJST0xFX2FhYSIsIlJPTEVfTk9STUFMIl0sImp0aSI6IjUzN2JmYTFhLWQ1NGItNGRiMy1hY2ZlLWFmMzUzMDFhOTNhYSIsImNsaWVudF9pZCI6ImFkbWluIn0.sYKKOeAcYND6_yJKS53NfZu57_KJOMdwwej-NuLH0eU'
    if (window.localStorage.getItem('access-token')) {
      config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('access-token')
    }
    // }
    return config
  },
  err
);
// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
 /* if (response.data && response.data.code) {
    if (parseInt(response.data.code) === 401) {
      //未登录
      bus.$emit('goto', '/login')
    }
  }*/

  return response;
}, err);





//基地址
let base = Env.baseURL;

//测试使用
export const ISDEV = Env.isDev;


//通用方法
export const POST = (url, params) => {
  return axios.post(`${base}${url}`, params).then(res => {
    console.log(res)
    if (res.data.returnCode === 0){
      return res.data.data
    } else{
      Message({
        message: res.data.returnMsg,
        type: 'error',
        duration: 5 * 1000
      })
    }
  })
}

export const GET = (url, params) => {
  return axios.get(`${base}${url}`, {
    params: params
  }).then(res => {
    console.log(res)
    if (res.data.returnCode === 0){
      return res.data.data
    } else{
      Message({
        message: res.data.returnMsg,
        type: 'error',
        duration: 5 * 1000
      })
    }
  })
}

export const PUT = (url, params) => {
  return axios.put(`${base}${url}`, params).then(res => res.data)
}

export const DELETE = (url, params) => {
  return axios.delete(`${base}${url}`, {
    params: params
  }).then(res => res.data)
}

export const PATCH = (url, params) => {
  return axios.patch(`${base}${url}`, params).then(res => res.data)
}

export const EXPORT = (url, params) => {
  return axios.post(`${base}${url}`, params,{
    responseType: 'blob'
  }).then(res => res.data)
}

//通用方法
export const POST_OAUTH = (url, params) => {
  return axios({
    url:`${base}${url}`,
      auth: {
        username: 'admin',
        password: '123456'
      },
    /* headers: {
       // 'Authorization': 'Bearer ' + token,
       'Content-Type':'application/json'
     },*/
    /*headers: {
      'Authorization': 'Basic Auth'
    },*/
    /*data: params,
    grant_type: 'password',*/
    params: {
      grant_type: 'password',
      password:'123456',
      username:'user'
    },
    method: 'post'
  }).then(res => res.data)
}

/*export const GET_OAUTH = (url, params) => {
  return axios({
    url:`${base}${url}`,
    method: 'get'
  }).then(res => {
    console.log(res)
    if (res.data.returnCode === 0){
      return res.data.data
    } else{
      Message({
        message: res.data.returnMsg,
        type: 'error',
        duration: 5 * 1000
      })
    }
  })
}*/
