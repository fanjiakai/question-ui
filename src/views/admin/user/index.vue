<template>
  <el-container class="manager">
    <el-header>
      <query-condition :query="query"></query-condition>
    </el-header>
    <tool-row
      :buttonArr="buttonArr"
      @add="addDialog()"
    />
    <!--table用户表格-->
    <el-main style="height: auto">
      <!--<user-table :tableHeader="tableHeader" :tableData="tableData"></user-table>-->
      <el-table :data="tableData" style="width: 100%;" :height="tableHeight" border >
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name" label="姓名" width=""></el-table-column>
        <el-table-column prop="userName" label="用户名" width=""></el-table-column>
        <el-table-column prop="dept" label="部门" width=""></el-table-column>
        <el-table-column prop="role" label="职级" width=""></el-table-column>
        <el-table-column prop="insertUser" label="创建人" width=""></el-table-column>
        <el-table-column prop="insertDate" label="创建时间" width=""></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="editDialog(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="delete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer class="main-right-page">
      <page-helper :currentPage="page.currentPage" :pageSizes="page.pageSizes" :pageSize="page.pageSize" :layout="page.layout" :total="page.total"></page-helper>
    </el-footer>
    <el-dialog title="新增用户" :visible.sync="dialogController.addDialogVisible" width="60%" :before-close="handleClose">
      <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="addForm.name" ></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="addForm.userName" ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm.password" ></el-input>
        </el-form-item>
        <el-form-item label="部门" prop="dept">
          <el-input v-model="addForm.dept" ></el-input>
        </el-form-item>
        <el-form-item label="职级" prop="position">
          <el-input v-model="addForm.position" ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addForm.email" ></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-input v-model="addForm.role" ></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="headPortrait">
          <el-input v-model="addForm.headPortrait" ></el-input>
        </el-form-item>
       <!-- <el-form-item label="图标" prop="iconClass">
          &lt;!&ndash;<el-input v-model="addForm.iconClass" ></el-input>&ndash;&gt;
          <icon-select :icon="addForm.iconClass" :type="'addForm'" @changeIcon="changeIcon"></icon-select>
        </el-form-item>-->
        <!--<el-form-item label="排序" prop="orderNum">
          <el-input v-model="addForm.orderNum" ></el-input>
        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogController.addDialogVisible = false" size="small" >取 消</el-button>
        <el-button type="primary" @click="save()" size="small" >确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改用户" :visible.sync="dialogController.editDialogVisible" width="30%" :before-close="handleClose">
      <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="editForm.name" ></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="editForm.userName" ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="editForm.password" ></el-input>
        </el-form-item>
        <el-form-item label="部门" prop="dept">
          <el-input v-model="editForm.dept" ></el-input>
        </el-form-item>
        <el-form-item label="职级" prop="position">
          <el-input v-model="editForm.position" ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email" ></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-input v-model="editForm.role" ></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="headPortrait">
          <el-input v-model="editForm.headPortrait" ></el-input>
        </el-form-item>
        <!-- <el-form-item label="图标" prop="iconClass">
           &lt;!&ndash;<el-input v-model="addForm.iconClass" ></el-input>&ndash;&gt;
           <icon-select :icon="addForm.iconClass" :type="'addForm'" @changeIcon="changeIcon"></icon-select>
         </el-form-item>-->
        <!--<el-form-item label="排序" prop="orderNum">
          <el-input v-model="addForm.orderNum" ></el-input>
        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogController.editDialogVisible = false" size="small" >取 消</el-button>
        <el-button type="primary" @click="edit()" size="small" >确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
  import UserTable from '@/components/table/NomalTable.vue'
  import QueryCondition from '@/components/query/QueryCondition.vue'
  import ToolRow from '@/components/tool/ToolRow.vue'
  import PageHelper from '@/components/page/PageHelper.vue'
  import API from '@/api/api_user.js'
    export default {
      name: "index",
      components:{UserTable,QueryCondition,PageHelper,ToolRow},
      data(){
        return {
          style:{
            tableHeight:''
          },
          tableData: [
            {
            name: '王小虎',
            userName: '上海',
            dept: '普陀区',
            role: '上海市普陀区金沙江路 1518 弄',
            insertUser: 200333,
            insertDate:'2016-05-03'
            },{
              name: '王小虎',
              userName: '上海',
              dept: '普陀区',
              role: '上海市普陀区金沙江路 1518 弄',
              insertUser: 200333,
              insertDate:'2016-05-03'
            },{
              name: '王小虎',
              userName: '上海',
              dept: '普陀区',
              role: '上海市普陀区金沙江路 1518 弄',
              insertUser: 200333,
              insertDate:'2016-05-03'
            },{
              name: '王小虎',
              userName: '上海',
              dept: '普陀区',
              role: '上海市普陀区金沙江路 1518 弄',
              insertUser: 200333,
              insertDate:'2016-05-03'
            },{
              name: '王小虎',
              userName: '上海',
              dept: '普陀区',
              role: '上海市普陀区金沙江路 1518 弄',
              insertUser: 200333,
              insertDate:'2016-05-03'
            }
          ],
          query: {
            form:{
              name:'',
              userName:'',
              dept:''
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
                value:'请选择',
                type:'select',
                condition:[
                  {
                    value:'111',
                    label:'fanjiakai'
                  }, {
                    value:'222',
                    label:'fanjiakaiceshi'
                  }
                ]
              },{
                name:'归属部门',
                code:'dept',
                value:'',
                type:'cascader',
                condition:[
                  {
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                      value: 'shejiyuanze',
                      label: '设计原则',
                      children: [{
                        value: 'yizhi',
                        label: '一致'
                      }, {
                        value: 'fankui',
                        label: '反馈'
                      }, {
                        value: 'xiaolv',
                        label: '效率'
                      }, {
                        value: 'kekong',
                        label: '可控'
                      }]
                    }, {
                      value: 'daohang',
                      label: '导航',
                      children: [{
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                      }, {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                      }]
                    }]
                  }, {
                    value: 'zujian',
                    label: '组件',
                    children: [{
                      value: 'basic',
                      label: 'Basic',
                      children: [{
                        value: 'layout',
                        label: 'Layout 布局'
                      }, {
                        value: 'color',
                        label: 'Color 色彩'
                      }, {
                        value: 'typography',
                        label: 'Typography 字体'
                      }, {
                        value: 'icon',
                        label: 'Icon 图标'
                      }, {
                        value: 'button',
                        label: 'Button 按钮'
                      }]
                    }, {
                      value: 'form',
                      label: 'Form',
                      children: [{
                        value: 'radio',
                        label: 'Radio 单选框'
                      }, {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                      }, {
                        value: 'input',
                        label: 'Input 输入框'
                      }, {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                      }, {
                        value: 'select',
                        label: 'Select 选择器'
                      }, {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                      }, {
                        value: 'switch',
                        label: 'Switch 开关'
                      }, {
                        value: 'slider',
                        label: 'Slider 滑块'
                      }, {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                      }, {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                      }, {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                      }, {
                        value: 'upload',
                        label: 'Upload 上传'
                      }, {
                        value: 'rate',
                        label: 'Rate 评分'
                      }, {
                        value: 'form',
                        label: 'Form 表单'
                      }]
                    }, {
                      value: 'data',
                      label: 'Data',
                      children: [{
                        value: 'table',
                        label: 'Table 表格'
                      }, {
                        value: 'tag',
                        label: 'Tag 标签'
                      }, {
                        value: 'progress',
                        label: 'Progress 进度条'
                      }, {
                        value: 'tree',
                        label: 'Tree 树形控件'
                      }, {
                        value: 'pagination',
                        label: 'Pagination 分页'
                      }, {
                        value: 'badge',
                        label: 'Badge 标记'
                      }]
                    }, {
                      value: 'notice',
                      label: 'Notice',
                      children: [{
                        value: 'alert',
                        label: 'Alert 警告'
                      }, {
                        value: 'loading',
                        label: 'Loading 加载'
                      }, {
                        value: 'message',
                        label: 'Message 消息提示'
                      }, {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                      }, {
                        value: 'notification',
                        label: 'Notification 通知'
                      }]
                    }, {
                      value: 'navigation',
                      label: 'Navigation',
                      children: [{
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                      }, {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                      }, {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                      }, {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                      }, {
                        value: 'steps',
                        label: 'Steps 步骤条'
                      }]
                    }, {
                      value: 'others',
                      label: 'Others',
                      children: [{
                        value: 'dialog',
                        label: 'Dialog 对话框'
                      }, {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                      }, {
                        value: 'popover',
                        label: 'Popover 弹出框'
                      }, {
                        value: 'card',
                        label: 'Card 卡片'
                      }, {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                      }, {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                      }]
                    }]
                  }, {
                    value: 'ziyuan',
                    label: '资源',
                    children: [{
                      value: 'axure',
                      label: 'Axure Components'
                    }, {
                      value: 'sketch',
                      label: 'Sketch Templates'
                    }, {
                      value: 'jiaohu',
                      label: '组件交互文档'
                    }
                    ]
                  }
                ]
              }
            ]
          },
          buttonArr:['add','edit'],
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
          addForm:{
            name:'',
            userName:'',
            password:'',
            dept:'',
            position:'',
            email:'',
            role:'',
            headPortrait:''
          },
          addFormRules:{

          },
          editForm:{
            id:'',
            name:'',
            userName:'',
            password:'',
            dept:'',
            position:'',
            email:'',
            role:'',
            headPortrait:''
          },
          editFormRules:{

          }
        }
      },
      mounted(){
        this.pageList()
      },
      methods:{
        pageList(){
          let that = this
          API.pageList().then(function (result) {
            that.tableData = result.list
          })
        },
        addDialog(){
          this.dialogController.addDialogVisible = true
        },
        // 新增用户
        save(){
          let that = this;
          this.$refs.addForm.validate(valid => {
            if (valid) {
              let params = Object.assign({}, this.addForm);
              API.save(params).then(function (result) {
                // console.log(result)
                that.dialogController.addDialogVisible = false
                that.$refs["addForm"].resetFields();
                that.pageList()
              })
            }
          })
        },
        editDialog(index, row){
          console.log(row);
          this.dialogController.editDialogVisible = true
          // console.log(row)
          // this.editForm = Object.assign({}, row);
          console.log(row.id)
          let params = {
            id : row.id
          }
          let that = this
          API.getUserById(params).then(function (result) {
            console.log(result);
            that.editForm = Object.assign({}, result);
          })
        },
        // 用户修改操作
        edit(index, row) {
          console.log(index, row);
        },
        // 用户删除操作
        delete(index, row) {
          console.log(index, row);
        },
        handleClose(done){
          done()
        }
      }
    }
</script>

<style scoped>

</style>
