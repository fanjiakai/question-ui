<template>

  <el-table :data="tableData" style="width: 100%">
    <el-table-column v-for="value in tableHeader" :prop="value.code" :label="value.name" ></el-table-column>
  </el-table>
</template>

<script>
    export default {
      name: "NomalTable",
      props: {
        tableHeader: {
          type: Array,
          default: []
        },
        tableData: {
          type: Array,
          default: []
        }
      }
    }
</script>

<style scoped>

</style>
