<template>
  <div>
    <h3>{{id ? 'EditAdmin' :'CreateAdmin'}}</h3>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="Name">
        <el-input v-model="model.username" style="width:600px"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="text" v-model="model.password" style="width:600px"></el-input>
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
      model:{}
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`admin_users/${this.id}`, this.model);
      } else {
        await this.$http.post("admin_users", this.model);
      }
      this.$router.push("/adminuser/list");
      this.$message({
        type: "success",
        message: "Success!！"
      });
    },
    async fetch() {
      let res = await this.$http.get(`admin_users/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>
<style>
</style>