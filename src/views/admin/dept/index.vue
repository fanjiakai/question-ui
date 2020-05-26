<template>
  <el-container class="manager">
    <el-header >
      <query-condition :query="query"></query-condition>
    </el-header>
    <tool-row
      :buttonArr="buttonArr"
      @add="add()"
    />
    <el-main style="height: auto">
      <!--<menu-table :tableHeader="tableHeader" :tableData="tableData" @loadChild="getChildData"></menu-table>-->
      <el-table :data="tableData" style="width: 100%" row-key="id" border lazy :load="load" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column prop="name" label="机构名称" width=""></el-table-column>
        <el-table-column prop="code" label="部门编码" width=""></el-table-column>
        <el-table-column prop="type" label="类型" width=""></el-table-column>
        <el-table-column prop="insertUser" label="创建人"></el-table-column>
        <el-table-column prop="insertDate" label="创建时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="createChild(scope.$index, scope.row)">新增下级菜单</el-button>
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
              id:1,
              name:'王小虎',
              code:'123',
              type:'1',
              insertUser:'245',
              insertDate:'1029-21-34'
            },{
              id:2,
              name:'王小虎',
              code:'123',
              type:'1',
              insertUser:'245',
              insertDate:'1029-21-34'
            },{
              id:3,
              name:'王小虎',
              code:'123',
              type:'1',
              insertUser:'245',
              insertDate:'1029-21-34'
            },{id:4,
              name:'王小虎',
              code:'123',
              type:'1',
              insertUser:'245',
              insertDate:'1029-21-34'
            },{id:5,
              name:'王小虎',
              code:'123',
              type:'1',
              insertUser:'245',
              insertDate:'1029-21-34'
            }
            ],
          query: {
            form:{
              name:'',
              userName:''
            },
            list:[
              {
                name:'部门名称',
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
                id:23,
                name:'王小虎',
                code:'123',
                type:'1',
                insertUser:'245',
                insertDate:'1029-21-34'
              }
            ])
          }, 1000)
        }
      }
    }
</script>

<style scoped>

</style>
