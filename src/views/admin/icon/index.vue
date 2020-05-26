<template>
  <el-container class="manager">
    <el-header style="height: auto;">
      <query-condition :query="query" @search="search"></query-condition>
    </el-header>
    <tool-row
      :buttonArr="buttonArr"
      @synch="synch()"
    />
    <icon-select :icon="icon" @changeIcon="changeIcon"></icon-select>
    <!--table用户表格-->
    <el-main style="height: auto" v-loading="loading">
      <div v-for="item in iconList" class="icons" >
        <el-badge :is-dot="filtIcon(item)" class="item" >
          <i class="iconfont icon  " :class="item.iconClass" style="font-size: 40px"></i>
        </el-badge>
        <!--<svg class="icon my-icon" >
          <use xlink:href="#icon-Atlassian1"></use>
        </svg>-->
      </div>
    </el-main>
  </el-container>
</template>

<script>
  import QueryCondition from '@/components/query/QueryCondition.vue'
  import ToolRow from '@/components/tool/ToolRow.vue'
  import IconSelect from '@/components/icon/IconSelect.vue'
  import API from '@/api/api_icon.js'
    export default {
      name: "index",
      components:{QueryCondition,ToolRow,IconSelect},
      data(){
          return {
            query: {
              form:{
                iconType:''
              },
              list:[
                {
                  name:'图标库名',
                  code:'iconType',
                  value:'',
                  type:'radioButton',
                  condition:[
                    {
                      value:'logoColor',
                      label:'logo(彩色)'
                    },{
                      value:'logoGray',
                      label:'logo(灰色)'
                    },{
                      value:'logoBank',
                      label:'logo(银行)'
                    },{
                      value:'materialDesign1',
                      label:'material-design(上)'
                    },{
                      value:'materialDesign2',
                      label:'material-design(中)'
                    },{
                      value:'materialDesign3',
                      label:'material-design(下)'
                    },{
                      value:'aliInternational',
                      label:'阿里巴巴国际'
                    },{
                      value:'aliController',
                      label:'阿里云控制台'
                    },{
                      value:'backStage',
                      label:'后台管理系统'
                    },{
                      value:'weather',
                      label:'天气'
                    }
                  ]
                }
              ]
            },
            buttonArr:['synch'],
            iconFile: {
              aliController:'ali-controller',
              aliInternational:'ali-international',
              backStage:'back-stage',
              logoBank:'logo-bank',
              logoColor:'logo-color',
              logoGray:'logo-gray',
              materialDesign1:'material-design-1',
              materialDesign2:'material-design-2',
              materialDesign3:'material-design-3',
              weather:'weather'
            },
            iconList: [

            ],
            iconData:[],
            loading:false,
            icon:''
          }
      },
      mounted(){
      },
      methods: {
        list(value) {
          let that = this
          let param = {
            classify: value.form.iconType
          }
          that.loading = true
          API.list(param).then(function (result) {
            that.iconData = result
            that.getIconFromFile(value)
            that.loading = false
          })
        },
        synch(){
          API.synch(this.iconList).then(function(result){

          })
        },
        //过滤图标
        filtIcon(item){
          for (var i = 0; i < this.iconData.length; i++){
            if (item.iconClass === this.iconData[i].iconClass) {
              console.log("true")
              return true
            }
          }
          /**/
          return false
        },
        getIconFromFile(value){
          this.query.iconType = this.iconFile[value.form.iconType]
          // 获取数据库中图标
          // this.list();
          let iconJson =  require('@/assets/icon/'+this.iconFile[value.form.iconType]+'/iconfont.json')
          let that = this
          that.iconList = []
          iconJson.glyphs.forEach(item => {
            that.iconList.push({
              iconClass: iconJson.css_prefix_text + item.font_class,
              name: item.name,
              classify: value.form.iconType,
              iconFiles: that.iconFile[value.form.iconType]
            })
          })
        },
        search(value){
          this.list(value);

        },
        changeIcon(value){
          this.icon = value.iconClass;
        }
      }
    }
</script>

<style scoped>
.icons{
  display: inline-block;
  line-height: 50px;
  width: 60px;
  height: 50px;
  margin: 10px 20px;
  border-radius: 10px;
  transition: box-shadow 0.5s;
}
.icons:hover{
  cursor: pointer;
  box-shadow: 1px 3px 9px 2px #d6d6d6;
}

</style>
<style>
  .my-icon{

  }
</style>
