/**
 * 图标相关的api
 * @author bootdo 1992lcg@163.com
 */
import * as API from './'

export default {

  list: params=>{
    return API.GET('api-admin/icon/list',params)
  },
  page: params=>{
    return API.GET('api-admin/icon/pageList',params)
  },
/*  treeMenu: params=>{
    return API.GET('menu/menuTree',params)
  },
  save: params=>{
    return API.PUT('menu/save',params)
  },*/
  synch: params=>{
    return API.POST('api-admin/icon/synch',params)
  },
}
