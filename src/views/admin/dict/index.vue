<template>
  <el-container class="manager">
    <el-header>
      <query-condition :query="query"></query-condition>
    </el-header>
    <tool-row
      :buttonArr="buttonArr"
      @add="add()"
    />
    <!--table用户表格-->
    <el-main style="height: auto">
      <!--<user-table :tableHeader="tableHeader" :tableData="tableData"></user-table>-->
      <el-table :data="tableData" style="width: 100%;" :height="tableHeight" border >
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="key" label="键" width=""></el-table-column>
        <el-table-column prop="value" label="值" width=""></el-table-column>
        <el-table-column prop="category" label="标签" width=""></el-table-column>
        <el-table-column prop="type" label="类型" width=""></el-table-column>
        <el-table-column prop="bz" label="备注" width=""></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="addKeyValue(scope.$index, scope.row)">添加键&值</el-button>
            <el-button size="mini" @click="edit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="delete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer class="main-right-page">
      <page-helper :currentPage="page.currentPage" :pageSizes="page.pageSizes" :pageSize="page.pageSize" :layout="page.layout" :total="page.total"></page-helper>
    </el-footer>
    <!--<el-dialog title="新增" :visible.sync="dialogController.addDialogVisible" width="30%" :before-close="handleClose">
      <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
        <el-form-item label="菜单名称" prop="menuName">
          <el-input v-model="addForm.menuName" ></el-input>
        </el-form-item>
        <el-form-item label="菜单路径" prop="url">
          <el-input v-model="addForm.url" ></el-input>
        </el-form-item>
        <el-form-item label="权限" prop="auth">
          <el-input v-model="addForm.auth" ></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-input v-model="addForm.type" ></el-input>
        </el-form-item>
        <el-form-item label="所属系统" prop="system">
          <el-input v-model="addForm.system" ></el-input>
        </el-form-item>
        <el-form-item label="排序" prop="orderNum">
          <el-input v-model="addForm.orderNum" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogController.addDialogVisible = false" size="small" >取 消</el-button>
        <el-button type="primary" @click="save()" size="small" >确 定</el-button>
      </div>
    </el-dialog>-->
  </el-container>
</template>

<script>
  import QueryCondition from '@/components/query/QueryCondition.vue'
  import ToolRow from '@/components/tool/ToolRow.vue'
  import PageHelper from '@/components/page/PageHelper.vue'
  import API from '@/api/api_dict.js'
    export default {
      name: "index",
      components:{QueryCondition, ToolRow, PageHelper},
      data(){
        return {
          query: {
            form:{
              category:''
            },
            list:[
              {
                name:'标签',
                code:'category',
                value:'',
                type:'text',
                condition:[
                  {
                    value:'',
                    label:''
                  }
                ]
              }
            ]
          },
          buttonArr:['add','edit'],
          style:{
            tableHeight:''
          },
          tableData: [
            {
              key: '王小虎',
              value: '上海',
              category: '普陀区',
              type: '上海市普陀区金沙江路 1518 弄',
              bz: 200333
            }
          ],
          page:{
            currentPage:1,
            pageSizes:[10,20,30,40],
            pageSize:10,
            layout:'total, sizes, prev, pager, next, jumper',
            total:20
          },
          dialogController:{
            addDialogVisible: false,
            editDialogVisible:false
          },
        }
      },
      mounted(){
        this.list()
      },
      methods:{
        list(){
          let that = this
          API.list().then(function (result) {
            console.log("字典管理")
            console.log(result)
            that.tableData = result
          })
        },
        add(){

        },
        addKeyValue(index, row){

        }
      }
    }
</script>

<style scoped>

</style>
