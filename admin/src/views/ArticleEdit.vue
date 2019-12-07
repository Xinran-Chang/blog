<template>
  <div>
    <h3>{{id ? 'EditArticle' :'CreateArticle'}}</h3>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="Title">
        <el-input v-model="article.title" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="Category">
        <el-select placeholder="select" v-model="article.category">
          <el-option
            v-for="item in category"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Content">
        <el-input type="textarea" v-model="article.content" style="width:450px"></el-input>
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
      article: {
      },
      category: []
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`articles/${this.id}`, this.article);
      } else {
        await this.$http.post("articles", this.article);
      }
      this.$router.push("/article/list");
      this.$message({
        type: "success",
        message: "Success!！"
      });
    },
    async fetch() {
      let res = await this.$http.get(`articles/${this.id}`);
      this.article = res.data;
    },
    async getcategory() {
      let res = await this.$http.get(`categories`);
      this.category = res.data;
    }
  },
  created() {
    this.getcategory();
    this.id && this.fetch();
  }
};
</script>
<style>
</style>