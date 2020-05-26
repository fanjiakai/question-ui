<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="changeUrl('/')">首页</el-menu-item>
        <el-menu-item index="2" @click="changeUrl('/admin')">基础服务</el-menu-item>
        <el-menu-item index="3">其他</el-menu-item>
      </el-menu>
      <!--<div style="margin-top: 20px; position: absolute;top: 0;">
        <el-button type="info" @click="changeTheme('FEB84A')">FEB84A</el-button>
        <el-button type="info" @click="changeTheme('text01')">text01</el-button>
      </div>-->
    </el-header>
    <el-container>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {bus} from "../bus.js";
export default {
  name: 'login',
  data () {
    return {
      activeIndex:'1',
      radio4:'1',
      moreTheme: "FEB84A",
    }
  },
  created() {
/*    bus.$on("setNickName", text => {
      this.nickname = text;
    });*/

    bus.$on("goto", url => {
      if (url === "/login") {
        localStorage.removeItem("access-user");
      }
      this.$router.push(url);
    });
/*
    bus.$on("switchMenu", url => {
      this.$router.push(url);
    });*/

  },
  mounted() {
    let themeClassName = "";
    // 获取localStorage值是否设置
    let localTheme = localStorage.getItem("customTheme");
    // 有，采用当前主题，否则采用默认主题
    themeClassName = localTheme ? localTheme : "FEB84A";
    this.changeClass(document.body, "custom-" + themeClassName);
    this.moreTheme = themeClassName;
    console.log(themeClassName)
  },
  methods: {
    changeUrl(url){
      this.$router.push(url);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    changeClass(element, className) {
      console.log(element)
      if (!element || !className) return;
      element.className = className;

    },
    changeTheme(themeValue) {
      console.log(themeValue)
      this.changeClass(document.body, "custom-" + themeValue);
      this.moreTheme = themeValue;
      localStorage.setItem("customTheme", themeValue);
      console.log(themeValue)
      window.document.documentElement.setAttribute('data-theme', themeValue)
    }
  }
}
</script>
<style lang="scss">
  @import '../assets/css/mycss.scss';
  .el-header, .el-footer {
    //@include bg_color($background-color-theme1);
    float:left;
  }
</style>
<style scoped >
  /*@import '../assets/css/theme.scss';*/
  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /*line-height: 1000px;*/
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu-demo{
    text-align: center;
    display: inline-block;
  }
</style>
