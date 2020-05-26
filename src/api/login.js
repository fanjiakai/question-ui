import api from './index'
import { axios } from '@/utils/request'

/**
 *
 * 登录bug
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */

// 用户名密码登录 http://localhost:8002/auth/oauth/token?username=admin&grant_type=password&scope=select&client_id=prex-app&client_secret=123456&password=admin
export function login (username, password, code, t) {
  const grant_type = 'password'
  const scope = 'server'
  return axios({
    url: '/auth/oauth/token',
    headers: {
      'Authorization': 'Basic cHJleDoxMjM0NTY='
    },
    method: 'post',
    params: { username, password, t, code, grant_type, scope }
  })
}
