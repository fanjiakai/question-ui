/**
 * 菜单相关的api
 * @author bootdo 1992lcg@163.com
 */
import * as API from './'

export default {

  list: params=>{
    return API.GET('api-admin/menu/list',params)
  },
  treeMenu: params=>{
    return API.GET('api-admin/menu/menuTree',params)
  },
  save: params=>{
    return API.POST('api-admin/menu/save',params)
  },
  edit: params=>{
    return API.POST('api-admin/menu/edit',params)
  },
/*  list: params=>{
    return API.GET_OAUTH('api-admin/menu/list',params)
  },
  treeMenu: params=>{
    return API.GET_OAUTH('api-admin/menu/menuTree',params)
  },
  save: params=>{
    return API.POST_OAUTH('api-admin/menu/save',params)
  },
  edit: params=>{
    return API.POST_OAUTH('api-admin/menu/edit',params)
  },*/
}
