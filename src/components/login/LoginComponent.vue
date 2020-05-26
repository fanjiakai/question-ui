<template>
    <div class="component-login " >
      <div style="text-align: center;" >
        <el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
      </div>
      <el-form ref="loginForm" :model="loginForm" label-position="left" label-width="" :rules="loginRules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginUser">登录</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
      data(){
          return {
            loginForm:{
              username:'',
              password:''
            },
            loginRules: {
              username: [
                {required: true, message: '请输入用户名', trigger: 'blur'}
              ],
              password: [
                {required: true, message: '请输入密码', trigger: 'blur'}
              ],
            }
          }
      },
      methods: {
        loginUser(){
          this.$refs['loginForm'].validate((valid) => {
            if (valid) {
              let form = Object.assign({}, this.loginForm);
              this.$emit('login',form)
              this.resetForm()
            }
          })
        },
        resetForm(){
          this.$refs['loginForm'].resetFields()
        }
      }
    }
</script>

<style scoped>
.component-login{

  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 20px;
}
</style>
