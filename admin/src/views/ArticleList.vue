<template>
  <div>
    <el-table :data="articlelists">
      <el-table-column prop="title" label="Title" width="500"></el-table-column>
      <el-table-column prop="content" label="Content"></el-table-column>
      <el-table-column prop="category.name" label="Category"></el-table-column>
      <el-table-column fixed="right" label="operation" width="100">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/article/edit/${scope.row._id}`)"
          >edit</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articlelists: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("articles");
      this.articlelists = res.data;
    },
    async remove(row) {
      this.$confirm("是否删除文章?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.$http.delete(`articles/${row._id}`);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.fetch();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style>
</style>