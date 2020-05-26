/**
 * 用户相关的api
 * @author bootdo 1992lcg@163.com
 */
import * as API from './'

export default {

  pageList: params=>{
    return API.GET('api-admin/user/pageList',params)
  },
  save: params=>{
    return API.POST('api-admin/user/save',params)
  },
  getUserById: params => {
    return API.GET('api-admin/user/getUserById',params)
  }
}
