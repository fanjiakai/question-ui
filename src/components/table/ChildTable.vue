<template>
  <el-table :data="tableData" style="width: 100%" row-key="id" border lazy :load="load" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column v-for="value in tableHeader" :prop="value.code" :label="value.name" ></el-table-column>
  </el-table>
</template>

<script>
    export default {
        name: "ChildTable",
      props: {
        tableHeader: {
          type: Array,
          default: []
        },
        tableData: {
          type: Array,
          default: []
        }
      },
      methods:{
        load(tree, treeNode, resolve){
          this.$emit("loadChild", {tree:tree,treeNode:treeNode,resolve:resolve});

        }
      }
    }
</script>

<style scoped>

</style>
