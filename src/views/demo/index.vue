<template>
    <div class="float-box" >
      <div style="width: 400px;">
        <div class="float-title">桥梁情况</div>
        <div class="outer-properties">
          <span class="inner-properties" >111</span>
          <span class="inner-properties">222</span>
        </div>
        <div class="outer-properties">
          <span class="inner-properties">333</span>
          <span class="inner-properties">4444</span>
        </div>
        <div class="outer-properties">
          <span class="inner-properties">5555</span>
          <span class="inner-properties">6666</span>
        </div>
        <div class="outer-properties">
          <span class="inner-properties">7777</span>
          <span class="inner-properties">8888</span>
        </div>
        <div class="float-bottom">桥梁情况</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
.float-box div{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.float-box span{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

  .inner-properties{
    /*display: inline-block;*/
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    justify-content:center;
    align-items:Center;
    border: 1px solid #919191;
  }
  .outer-properties{
    display:inline-block;
    width: 200px;
    height: 40px;
    float: left;
  }
  .float-title{
    height: 30px;
    display: flex;
    align-items:Center;
  }
  .float-bottom{
    text-align: right;
  }
</style>
