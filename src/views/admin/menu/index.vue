<template>
  <el-container >
    <el-header style="height: 0">
      <!--<query-condition :query="query"></query-condition>-->
    </el-header>
    <tool-row
      :buttonArr="buttonArr"
      @add="addDialog()"
    />
    <el-main style="height: auto;">
      <el-table :data="tableData" style="width: 100%" row-key="id" border  :tree-props="{children: 'children'}">
        <el-table-column prop="menuName" label="菜单名" width=""></el-table-column>
        <el-table-column prop="type" label="类型" width=""></el-table-column>
        <el-table-column prop="url" label="路径"></el-table-column>
        <el-table-column prop="auth" label="权限"></el-table-column>
        <el-table-column prop="orderNum" label="排序" width=""></el-table-column>
        <el-table-column prop="iconClass" label="图标" width="100" align="center">
          <template slot-scope="scope">
            <i class="iconfont icon  " :class="scope.row.iconClass" style="font-size: 30px"></i>
          </template>
        </el-table-column>
        <el-table-column label="操作"width="400">
          <template slot-scope="scope">
            <el-button size="mini" @click="createChild(scope.$index, scope.row)">新增下级菜单</el-button>
            <el-button size="mini" @click="editDialog(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="delete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-dialog title="新增根节点菜单" :visible.sync="dialogController.addDialogVisible" width="30%" :before-close="handleClose">
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
        <el-form-item label="图标" prop="iconClass">
          <!--<el-input v-model="addForm.iconClass" ></el-input>-->
          <icon-select :icon="addForm.iconClass" :type="'addForm'" @changeIcon="changeIcon"></icon-select>
        </el-form-item>
        <el-form-item label="排序" prop="orderNum">
          <el-input v-model="addForm.orderNum" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogController.addDialogVisible = false" size="small" >取 消</el-button>
        <el-button type="primary" @click="save()" size="small" >确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改菜单" :visible.sync="dialogController.editDialogVisible" width="30%" :before-close="handleClose">
      <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
        <el-form-item label="菜单名称" prop="menuName">
          <el-input v-model="editForm.menuName" ></el-input>
        </el-form-item>
        <el-form-item label="菜单路径" prop="url">
          <el-input v-model="editForm.url" ></el-input>
        </el-form-item>
        <el-form-item label="权限" prop="auth">
          <el-input v-model="editForm.auth" ></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-input v-model="editForm.type" ></el-input>
        </el-form-item>
        <el-form-item label="所属系统" prop="system">
          <el-input v-model="editForm.system" ></el-input>
        </el-form-item>
        <el-form-item label="图标" prop="iconClass">
          <!--<el-input v-model="addForm.iconClass" ></el-input>-->
          <icon-select :icon="editForm.iconClass" :type="'editForm'" @changeIcon="changeIcon"></icon-select>
        </el-form-item>
        <el-form-item label="排序" prop="orderNum">
          <el-input v-model="editForm.orderNum" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogController.editDialogVisible = false" size="small" >取 消</el-button>
        <el-button type="primary" @click="edit()" size="small" >确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
  import MenuTable from '@/components/table/ChildTable.vue'
  import QueryCondition from '@/components/query/QueryCondition.vue'
  import ToolRow from '@/components/tool/ToolRow.vue'
  import IconSelect from '@/components/icon/IconSelect.vue'
  import API from '@/api/api_menu.js'
    export default {
      name: "index",
      components:{MenuTable,QueryCondition,ToolRow,IconSelect},
      data() {
        return {
          tableData: [],
          buttonArr:['add','edit'],
          dialogController:{
            addDialogVisible: false,
            editDialogVisible:false
          },
          addForm:{
            id:'',
            parentId:'',
            menuName:'',
            url:'',
            auth:'',
            type:'',
            iconClass:'',
            orderNum:'',
            system:''
          },
          addFormRules:{

          },
          editForm:{
            id:'',
            parentId:'',
            menuName:'',
            url:'',
            auth:'',
            type:'',
            iconClass:'',
            orderNum:'',
            system:''
          },
          editFormRules:{

          }
        }
      },
      created(){
        this.treeList();
      },
      methods:{
        treeList(){
          let that = this
          API.treeMenu().then(function (result) {
            that.tableData = result
          })
        },
        addDialog(){
          this.addForm.parentId = ''
          this.dialogController.addDialogVisible = true
        },
        editDialog(index, row){
          this.dialogController.editDialogVisible = true
          console.log(row)
          this.editForm = Object.assign({}, row);
        },
        // 新增下级菜单
        createChild(index, row){
          this.addForm.parentId = row.id
          this.dialogController.addDialogVisible = true
        },
        // 保存菜单
        save(){
          let that = this;
          this.$refs.addForm.validate(valid => {
            if (valid) {
              let params = Object.assign({}, this.addForm);
              API.save(params).then(function (result) {
                console.log(result)
                that.dialogController.addDialogVisible = false
                that.treeList();
                that.$refs["addForm"].resetFields();
              })
            }
          })
        },
        // 表格修改操作
        edit() {
          let that = this;
          this.$refs.editForm.validate(valid => {
            if (valid) {
              let params = Object.assign({}, this.editForm);
              API.edit(params).then(function (result) {
                console.log(result)
                that.dialogController.editDialogVisible = false
                that.treeList();
                that.$refs["editForm"].resetFields();
              })
            }
          })
        },
        // 表格删除操作
        delete(index, row) {
          console.log(index, row);
        },
        changeIcon(value){
          this[value.type].iconClass = value.iconClass;
        },
        handleClose(done){
          done()
        }
      }
    }
</script>

<style scoped>

</style>
