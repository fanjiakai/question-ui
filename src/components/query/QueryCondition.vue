<template>
  <div>
    <el-form :inline="true" :model="query.form" class="demo-form-inline">
      <el-form-item v-for="item in query.list"  :label="item.name" >
        <!--输入框-->
        <el-input v-if="item.type === 'text'" v-model="query.form[item.code]" :placeholder="item.value"></el-input>
        <!--下拉框-->
        <el-select v-if="item.type === 'select'" v-model="query.form[item.code]" :placeholder="item.value">
          <el-option v-for="conditionList in item.condition" :label="conditionList.label" :value="conditionList.value"></el-option>
        </el-select>
        <!--单选框-->
        <el-radio-group v-if="item.type === 'radioButton'" v-model="query.form[item.code]" >
          <el-radio-button v-for="conditionList in item.condition" :label="conditionList.value">{{conditionList.label}}</el-radio-button>
        </el-radio-group>
        <!--多选框-->
        <!--时间选择器-->
        <!--联级选择器-->
        <el-cascader v-if="item.type === 'cascader'" :options="item.condition" :props="{ checkStrictly: true }" clearable></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
        <el-button type="primary" @click="">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
      name: "QueryCondition",
      props: {
        query: {
          type: Object
        }
      },
      data(){
        return {
         /* form:{
            user:'',
            region:''
          }*/
        }
      },
      methods: {
        search(){
          this.$emit('search',{form:this.query.form})
        }
      }
    }
</script>

<style scoped>

</style>
