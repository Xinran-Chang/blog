<template>
  <div class="login-container">
    <el-card header="Please Login" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="Account">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-button type="primary" native-type="submit">Login</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<style>
.login-card {
  width: 25rem;
  margin: 10rem auto;
}
</style>

<script>
export default {
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post("login", this.model);
      localStorage.token = res.data.token;
      this.$router.push("/");
      this.$message({
        type: "success",
        message: "login success!"
      });
    }
  }
};
</script>