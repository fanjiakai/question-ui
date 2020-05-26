<template>
  <el-container class="manager">
    <el-header>
      <query-condition :query="query"></query-condition>
    </el-header>
    <!--table用户表格-->
    <el-main style="height: auto">
      <!--<user-table :tableHeader="tableHeader" :tableData="tableData"></user-table>-->
      <el-table :data="tableData" style="width: 100%" height="">
        <el-table-column fixed prop="date" label="序号" width=""></el-table-column>
        <el-table-column prop="name" label="应用名称" width=""></el-table-column>
        <el-table-column prop="province" label="省份" width=""></el-table-column>
        <el-table-column prop="city" label="市区" width=""></el-table-column>
        <el-table-column prop="address" label="地址" width=""></el-table-column>
        <el-table-column prop="zip" label="邮编" width=""></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="edit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="delete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <page-helper :currentPage="page.currentPage" :pageSizes="page.pageSizes" :pageSize="page.pageSize" :layout="page.layout" :total="page.total"></page-helper>
    </el-footer>
  </el-container>
</template>

<script>
  import UserTable from '@/components/table/NomalTable.vue'
  import QueryCondition from '@/components/query/QueryCondition.vue'
  import PageHelper from '@/components/page/PageHelper.vue'
  import 'echarts/map/js/china.js'
    export default {
        name: "index",
      components:{UserTable,QueryCondition,PageHelper},
      mounted(){
      },
      data(){
        return {
          tableData: [
            {
              date: '2016-05-03',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-02',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-04',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-01',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-08',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-07',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }],
          query: {
            form:{
              name:'',
              userName:''
            },
            list:[
              {
                name:'姓名',
                code:'name',
                value:'',
                type:'text',
                condition:[
                  {
                    value:'',
                    label:''
                  }
                ]
              },{
                name:'用户名',
                code:'userName',
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
          page:{
            currentPage:1,
            pageSizes:[10,20,30,40],
            pageSize:10,
            layout:'total, sizes, prev, pager, next, jumper',
            total:20
          }
        }
      },
      methods:{
        // 表格修改操作
        edit(index, row) {
          console.log(index, row);
        },
        // 表格删除操作
        delete(index, row) {
          console.log(index, row);
        }
      }
    }
</script>

<style scoped>

</style>
