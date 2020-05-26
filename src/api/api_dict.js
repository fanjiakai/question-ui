/**
 * 菜单相关的api
 * @author bootdo 1992lcg@163.com
 */
import * as API from './'

export default {

  list: params=>{
    return API.GET('api-admin/dict/listDict',params)
  },

}
