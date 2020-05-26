<template>
  <!-- style="position: relative;width: 300px;height: 300px;top: 0;display: inline-block;"-->
  <div class="in-the-middle login-form">
    <div class="login-logo">
      logo
      <el-button @click="aaa">aaa</el-button>
    </div>
    <div class="user-login-form"  >
      <login-component @login="userLogin"></login-component>
    </div>
  </div>

</template>

<script>
  import API from '@/api/api_login.js'
  import {login}  from '@/api/api_login.js'
  import LoginComponent from '@/components/login/LoginComponent.vue'
    export default {
      name: "login",
      components:{LoginComponent},
      methods:{
        aaa(){
          let param = {
            password:'123456',
            username:'user',
            grant_type:'password'
          }
          API.test(param).then(function(result){
          })
        },
        userLogin(value){
          let param = {
            password:'123456',
            username:'user',
            grant_type:'password'
          }
          let that = this
          API.login(param).then(function(result){
            // 登录成功获取用户信息及用户权限
            localStorage.setItem("access-token",result.access_token)
            that.$router.push('/home');
          })
        },
        getUserInfo(){

        }
      }
    }
</script>

<style scoped>
.login-form{
  width: 1000px;
  height: 600px;
}
.user-login-form{
  display: inline-block;
  float: right;
  width: 35%;
  height: 100%;
  padding-left: 20px;
}
.login-logo{
  display: inline-block;
  float: left;
  width: 65%;
  height: 100%;
}
</style>
