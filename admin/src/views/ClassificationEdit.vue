<template>
  <div>
    <h3>{{id ? 'EditCategory' :'CreateCategory'}}</h3>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="Name">
        <el-input v-model="category.name" style="width:200px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      category:{}
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`categories/${this.id}`, this.category);
      } else {
        await this.$http.post("categories", this.category);
      }
      this.$router.push("/classification/list");
      this.$message({
        type: "success",
        message: "Success!！"
      });
    },
    async fetch() {
      let res = await this.$http.get(`categories/${this.id}`);
      this.category = res.data;
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>
<style>
</style>