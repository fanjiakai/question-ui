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
      <!--<user-table :tableHeader="tableHeader" :tableData="tableData"></user-table>-->
      <el-table :data="tableData" style="width: 100%" height="" border="">
        <!--<el-table-column fixed prop="date" label="序号" width=""></el-table-column>-->
        <el-table-column prop="name" label="角色名111" width=""></el-table-column>
        <el-table-column prop="insertUser" label="创建人" width=""></el-table-column>
        <el-table-column prop="insertDate" label="创建时间" width=""></el-table-column>
        <el-table-column prop="deptIds" label="归属机构" width=""></el-table-column>
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
  import MenuTable from '@/components/table/ChildTable.vue'
  import QueryCondition from '@/components/query/QueryCondition.vue'
  import ToolRow from '@/components/tool/ToolRow.vue'
  import PageHelper from '@/components/page/PageHelper.vue'
    export default {
      name: "index",
      components:{MenuTable,QueryCondition,PageHelper,ToolRow},
      data(){
          return {
            tableData: [
              {
                name: '王小虎',
                insertUser: '上海',
                insertDate: '普陀区',
                deptIds: '上海市普陀区金沙江路 123123123123 弄'
              },{
                name: '王小虎',
                insertUser: '上海',
                insertDate: '普陀区',
                deptIds: '上海市普陀区金沙江路 1518 弄'
              },{
                name: '王小虎',
                insertUser: '上海',
                insertDate: '普陀区',
                deptIds: '上海市普陀区金沙江路 1518 弄'
              },{
                name: '王小虎',
                insertUser: '上海',
                insertDate: '普陀区',
                deptIds: '上海市普陀区金沙江路 1518 弄'
              },{
                name: '王小虎',
                insertUser: '上海',
                insertDate: '普陀区',
                deptIds: '上海市普陀区金沙江路 1518 弄'
              },{
                name: '王小虎',
                insertUser: '上海',
                insertDate: '普陀区',
                deptIds: '上海市普陀区金沙江路 1518 弄'
              }],
            query: {
              form:{
                name:'',
                userName:''
              },
              list:[
                {
                  name:'角色名',
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
            }
          }
      },
      methods:{
        add(){
          console.log("asd")
        },
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

