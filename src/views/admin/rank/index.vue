<template>
  <el-container class="manager">
    <el-header>
      <query-condition :query="query"></query-condition>
    </el-header>
    <tool-row
      :buttonArr="buttonArr"
      @add="add()"
    />
    <el-main style="height: auto">
      <!--<menu-table :tableHeader="tableHeader" :tableData="tableData" @loadChild="getChildData"></menu-table>-->
      <el-table :data="tableData" style="width: 100%" row-key="id" border lazy :load="load" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column prop="date" label="职位" width=""></el-table-column>
        <el-table-column prop="name" label="职位编码" width=""></el-table-column>
        <el-table-column prop="address" label="创建时间"></el-table-column>
        <el-table-column prop="address" label="创建人"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="createChild(scope.$index, scope.row)">新增下级职级</el-button>
            <el-button size="mini" @click="edit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="delete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
  import MenuTable from '@/components/table/ChildTable.vue'
  import QueryCondition from '@/components/query/QueryCondition.vue'
  import 'echarts/map/js/china.js'
  import ToolRow from '@/components/tool/ToolRow.vue'
    export default {
      name: "index",
      components:{MenuTable,QueryCondition,ToolRow},
      data(){
        return {
          // ectMap:''
          tableData: [
            {
              id: 1,
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              id: 2,
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              id: 3,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              hasChildren: true
            }, {
              id: 4,
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
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
          buttonArr:['add','edit']
        }
      },
      mounted(){
      },
      methods:{
        add(){

        },
        // 新增下级菜单
        createChild(index, row){
          console.log(index, row);
        },
        // 表格修改操作
        edit(index, row) {
          console.log(index, row);
        },
        // 表格删除操作
        delete(index, row) {
          console.log(index, row);
        },
        // 懒加载下级数据
        load(tree, treeNode, resolve) {
          setTimeout(() => {
            resolve([
              {
                id: 31,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                id: 32,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }
            ])
          }, 1000)
        }
      }
    }
</script>

<style scoped>

</style>
