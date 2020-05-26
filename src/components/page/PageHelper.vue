<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :hide-on-single-page="!(total / pageSize > 1)"
    :current-page="currentPage"
    :page-sizes="pageSizes"
    :page-size="pageSize"
    :layout="layout"
    :total="total">
  </el-pagination>
</template>

<script>
    export default {
      name: "PageHelper",
      props: {
        currentPage: {
          type: Number,
          default:1
        },
        pageSizes: {
          type: Array,
          default:[10, 20, 30, 40]
        },
        pageSize: {
          type: Number,
          default:10
        },
        layout: {
          type: String,
          default:'prev, pager, next'
        },
        total: {
          type: Number,
          default:0
        }
      },
      methods:{
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
      }
    }
</script>

<style scoped>

</style>
