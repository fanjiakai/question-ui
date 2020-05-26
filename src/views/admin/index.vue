<template>
  <el-container>
    <el-aside style="width: auto">
      <el-menu
        style="height: 100%;"
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        :collapse="collapsed"
        @close="handleClose">
        <div class="menu-toggle" @click.prevent="collapse">
          <i class="el-icon-d-arrow-left" v-show="!collapsed"></i>
          <i class="el-icon-d-arrow-right" v-show="collapsed"></i>
        </div>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
              <el-menu-item index="1-1" @click="changeUrl('/admin/user')">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  用户
                </template>
              </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>菜单管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="changeUrl('/admin/menu')">
              <template slot="title">
                <i class="el-icon-location"></i>
              菜单
              </template>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>角色管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1" @click="changeUrl('/admin/role')">
              <template slot="title">
                <i class="el-icon-location"></i>
              角色
              </template>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>区域管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1" @click="changeUrl('/admin/area')">
              <template slot="title">
                <i class="el-icon-location"></i>
              区域
              </template>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>部门管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1" @click="changeUrl('/admin/dept')">
              <template slot="title">
                <i class="el-icon-location"></i>
                部门
              </template>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>职位管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1" @click="changeUrl('/admin/rank')">
              <template slot="title">
                <i class="el-icon-location"></i>
                职级
              </template>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>应用管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="7-1" @click="changeUrl('/admin/apply')">
              <template slot="title">
                <i class="el-icon-location"></i>
                应用
              </template>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>配置管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="7-1" @click="changeUrl('/admin/dict')">
              <template slot="title">
                <i class="el-icon-location"></i>
                字典
              </template>
            </el-menu-item>
            <el-menu-item index="7-2" @click="changeUrl('/admin/icon')">
              <template slot="title">
                <i class="el-icon-location"></i>
                图标
              </template>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>

    </el-aside>
    <el-main class="main-right">
      <div class="main-foot">
        <div class="main-foot-title"></div>
        <div class="main-foot-tool"></div>
      </div>
      <div class="main-content">
        <!--<div class="main-content-title">{{title}}
          &lt;!&ndash;<div class="main-divider"></div>&ndash;&gt;
        </div>-->
        <router-view/>
      </div>
    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            collapsed:false,
            title:'用户管理'
          }
      },

      methods:{
        collapse: function() {
          this.collapsed = !this.collapsed;
        },
        changeUrl(url){
          this.$router.push(url);
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    /*min-height: 400px;*/
  }
  .menu-toggle{
    background: #d0d9fe;
    text-align: center;
    color: #395ab8;
    height: 26px;
    line-height: 30px;
  }
  .main-right{
    padding: 10px;
  }
  .main-content{
    height: calc(100vh - 180px);
    margin: 10px;
    padding: 20px;
    /*border: 1px solid red;*/
    background-color: #fff;
    /*box-shadow: 0px 0px 10px 4px #b5b5b5*/
  }
  .main-divider{
    height: 2px;
    margin: 4px 20px ;
    background-color: red;
  }
  .main-content-title{
    margin-bottom: 10px;
    font-size: 20px;
  }
  .main-foot{
    height: 40px;
    margin: 0 10px;

  }
  .main-foot-title{
    display: inline-block;
    height: 100%;
    width: 10%;
    background-color: #fff;
    /*box-shadow: 0px 0px 10px 4px #b5b5b5*/
  }
  .main-foot-tool{
    display: inline-block;
    float: right;
    height: 100%;
    width: 30%;
    background-color: #fff;
    /*box-shadow: 0px 0px 10px 4px #b5b5b5*/
  }
</style>
