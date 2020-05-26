<template>
    <div>
      <el-popover placement="right" title="图标列表" trigger="hover">
        <div>
          <div style="text-align: center; margin: 0;width: 300px;height: 300px;overflow:auto;" infinite-scroll-disabled="disabled"  :infinite-scroll-immediate="true" v-infinite-scroll="loadIcon">
            <div class="icon-select " v-for="item,index in iconList" @click="checkIcon(item)" :class="item.iconClass === icon? 'checkIcon':''">
              <i class="iconfont" :class="item.iconClass" style="font-size: 30px"></i>
            </div>
            <div class="clear"></div>
            <p v-if="loading">加载中...</p>
            <p v-if="noMore">没有更多了</p>
          </div>
        </div>
        <el-button slot="reference">
          <i v-if="icon && icon != ''" :class="icon" class="iconfont" style="font-size: 30px" ></i>
          <span v-else>请选择图标</span>
        </el-button>
      </el-popover>
    </div>
</template>

<script>
  import API from '@/api/api_icon.js'
    export default {
        name: "IconSelect",
      data(){
          return{
            iconList: [

            ],
            count: 0,
            page:{
              pageNum:1,
              pageSize:100,
              total:0
            },
            loading:false,
            /*icon:{
              iconClass:''
            }*/
          }
      },
      props: {
        icon: {
          type: String
        },
        type: {
          type: String
        }
      },
      mounted(){
        this.list()
      },
      computed: {
        disabled(){
          return this.loading || this.noMore
        },
        noMore () {
          return this.iconList.length >= this.page.total
        },
      },
      methods: {
        loadIcon(){
          this.list()
        },
        list(){
          let that = this
          let param = {
            pageNum: that.page.pageNum,
            pageSize: that.page.pageSize
          }
          console.log(this.page)
          that.loading = true
          API.page(param).then(function (result) {
            // console.log(result)
            console.log(result)
            that.iconList = that.iconList.concat(result.list)
            console.log(that.iconList)
            that.page.pageNum = result.pageNum + 1 > result.size?result.size:result.pageNum + 1
            that.page.pageSize = result.size
            that.page.total = result.total
            that.loading = false
          })
        },
        checkIcon(icon){
          /*console.log(icon)
          this.icon = icon*/
          this.$emit('changeIcon',{iconClass:icon.iconClass,type:this.type})
        }
      }
    }
</script>

<style scoped>
.icon-select{
  display: inline-block;
  padding: 2px 6px;
  float: left;
}
.icon-select:hover{
  box-shadow: 2px 2px 4px 0px #cacaca;
  cursor: pointer;
}
.clear{
  clear:both;
}
  .clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
    content: "";
    display: block;
    height: 0;
    clear:both;
    visibility: hidden;
  }
.checkIcon {
  color: #0075ce;
  text-shadow: 4px 4px 20px #3f3f3f;
}
</style>
