import Vue from 'vue'
import axios from 'axios'
// import { serialize } from '@/utils/util'
// import notification from 'ant-design-vue/es/notification'
import { VueAxios } from './axios'
// import { ACCESS_TOKEN } from '@/store/mutation-types'
// import errorCode from '@/const/errorCode'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api base_url
  // baseURL: 'http://localhost:8002/',
  headers: { "Content-Type": "application/json;charset=utf-8" }, //即将被发送的自定义请求头
  withCredentials: true, //表示跨域请求时是否需要使用凭证
  timeout: 6000 // 请求超时时间
})
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true
/*

const err = (error) => {
  if (error.response) {
    const data = error.response.data
    //状态码
    const status = error.response.status
    const message = errorCode[status] || data.msg || errorCode['default']
    const token = Vue.ls.get(ACCESS_TOKEN)
    if (status === 401) {
      notification.error({
        message: '系统提示',
        description: data.msg
      })
      // if (token) {
      //   store.dispatch('Logout').then(() => {
      //     setTimeout(() => {
      //       window.location.reload()
      //     }, 1500)
      //   })
      // }
    } else {
      notification.error({
        message: '系统提示',
        description: message,
        duration: 4
      })
    }
  }
  return Promise.reject(error)
}
*/

// request interceptor
/*service.interceptors.request.use(config => {
  const token = Vue.ls.get(ACCESS_TOKEN)
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config
}, err)

// response 拦截器
service.interceptors.response.use((response) => {
  return response.data

}, err)*/

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}
