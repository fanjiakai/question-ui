<template>
  <el-row style="display: block">
    <el-button v-if="buttonArr.indexOf('add') != -1" plain type="primary" size="small" @click="click('add')">新增</el-button>
    <el-button v-if="buttonArr.indexOf('remove') != -1" plain type="primary" size="small">删除</el-button>
    <el-button v-if="buttonArr.indexOf('removeList') != -1" plain type="primary" size="small">批量删除</el-button>
    <el-button v-if="buttonArr.indexOf('import') != -1" plain type="primary" size="small">导入</el-button>
    <el-button v-if="buttonArr.indexOf('export') != -1" plain type="primary" size="small">导出</el-button>
    <el-button v-if="buttonArr.indexOf('edit') != -1" plain type="primary" size="small">修改</el-button>
    <el-button v-if="buttonArr.indexOf('synch') != -1" plain type="primary" size="small" @click="click('synch')">同步</el-button>
    <el-button v-if="buttonArr.indexOf('') != -1" plain type="primary" size="small">默认按钮</el-button>
    <el-button v-if="buttonArr.indexOf('') != -1" plain type="primary" size="small">默认按钮</el-button>
    <el-button v-if="buttonArr.indexOf('') != -1" plain type="primary" size="small">默认按钮</el-button>
    <el-button v-if="buttonArr.indexOf('') != -1" plain type="primary" size="small">默认按钮</el-button>
    <el-button v-if="buttonArr.indexOf('') != -1" plain type="primary" size="small">默认按钮</el-button>
  </el-row>
</template>

<script>
    export default {
      // 工具行
      name: "ToolRow",
      props: {
        buttonArr: {    //定义onOK属性
          type: Array,
          default:['add','edit','remove']
        }
      },
      methods:{
        click(func){
          this.$emit(func);
        }
      }
    }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
