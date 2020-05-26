<template>
  <div style="height: calc(100vh - 60px);overflow:hidden;">
    首页
    <!--<button @click="clickFunction('top')">上方</button>
    <button @click="clickFunction('left')">左侧</button>
    <el-select
      v-model="value2"
      multiple
      collapse-tags
      style="margin-left: 20px;"
      placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择" @change="change">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>-->
    <div>
      <div class="vue-leaflet">
        <l-map style="width: 100%; height: 800px;" :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="marker">
            <l-popup :content="text"></l-popup>
          </l-marker>
        </l-map>
      </div>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
export default {
  name: 'login',
  data () {
    return {
      zoom: 13,
      center: L.latLng(47.413220, -1.219482),
      // url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      url: 'http://mt1.google.cn/vt/lyrs=s@113&hl=nl&x={x}&y={y}&z={z}&s=',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
      text: 'this is a marker',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value1: [],
      value2: [],
      input3: '',
      select: '',
      top:false,
      left:false
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  watch:{
    left:function(newVal){
      if (newVal){
        document.getElementById("inner-box").style.width="80%";
      } else{
        document.getElementById("inner-box").style.width="100%";
      }
    }
  },
  methods: {
    clickFunction(type){
      console.log(!this[type])
      this[type] = !this[type]
    },
    changeUrl(url){
      this.$router.push(url);
    },
    change(){
      console.log(123)
    }
  }
}
</script>

<style scoped>
  /*定义进入前与离开后状态*/
.bottom-enter, .bottom-leave-to {
  transform: translate3d(0, 200px, 0)
}
  /*定义离开前与进入后状态*/
 .bottom-leave, .bottom-enter-to {
   transform: translate3d(0, 0, 0)
 }
  /*定义进出过程*/
 .bottom-enter-active, .bottom-leave-active {
   transition: all 2s
 }

  /*定义进入前与离开后状态*/
  .left-enter, .left-leave-to {
    /*transform: translate3d(-100%, 0, 0)*/
    width: 0px;
  }
  /*定义离开前与进入后状态*/
  .left-leave, .left-enter-to {
    /*transform: translate3d(0, 0, 0)*/
    width: 0px;
  }
  /*定义进出过程*/
  .left-enter-active, .left-leave-active {
    transition: all 2s
  }
  .entryLeft{
    width: 200px;
  }
  .leaveLeft{
    width: 0px;
  }
  .entryTop{
    bottom: 0px;
  }
  .leaveTop{
    bottom: 0px;
  }

</style>
