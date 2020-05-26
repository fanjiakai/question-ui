import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Home from '@/views/home/Home'
import Admin from '@/views/admin/index'
import User from '@/views/admin/user/index'
import Role from '@/views/admin/role/index'
import Menu from '@/views/admin/menu/index'
import Area from '@/views/admin/area/index'
import Dept from '@/views/admin/dept/index'
import Rank from '@/views/admin/rank/index'
import Apply from '@/views/admin/apply/index'
import Dict from '@/views/admin/dict/index'
import Icon from '@/views/admin/icon/index'
import Demo from '@/views/demo/index'
const Login = resolve => require(['@/views/login.vue'], resolve);
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/home',
      leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'fa fa-home', // 图标样式class
      children: [
        {path: '/demo', component: Demo, name: '测试', menuShow: true},
        {path: '/home', component: Home, name: '首页', menuShow: true},
        {path: '/admin', component: Admin, name: '基础服务', menuShow: true,
          children: [
            {path: '/admin/user', component: User, name: '用户', menuShow: true},
            {path: '/admin/role', component: Role, name: '角色', menuShow: true},
            {path: '/admin/menu', component: Menu, name: '菜单', menuShow: true},
            {path: '/admin/area', component: Area, name: '区域', menuShow: true},
            {path: '/admin/dept', component: Dept, name: '部门', menuShow: true},
            {path: '/admin/rank', component: Rank, name: '职级', menuShow: true},
            {path: '/admin/apply', component: Apply, name: '应用', menuShow: true},
            {path: '/admin/dict', component: Dict, name: '字典', menuShow: true},
            {path: '/admin/icon', component: Icon, name: '图标', menuShow: true}
          ]
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // next()
  // console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    window.localStorage.removeItem('access-token')
    next()
  } else {
    /* loading = Loading.service({
       lock: true,
       text: '拼命加载中....',
       spinner: 'el-icon-loading',
       background: 'rgba(0, 0, 0, 0.9)',
       customClass:'loading-custom',
       target: document.querySelector('.div1')
     });*/
    let user = window.localStorage.getItem('access-token');
    if (!user) {
      next({path: '/login'})
    } else {
      next()
    }
  }
})
export default router
