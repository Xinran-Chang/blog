<template>
  <div>
    <h3>{{id ? 'EditArticle' :'CreateArticle'}}</h3>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="Title">
        <el-input v-model="article.title" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="Category">
        <el-select placeholder="select" v-model="article.category">
          <el-option v-for="item in category" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Background">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL+'/upload'"
          :headers="getAuth()"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="article.img" :src="article.img" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="Content">
        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="article.content"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor
  },
  props: {
    id: {}
  },
  data() {
    return {
      article: {},
      category: []
    };
  },
  methods: {
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post('upload',formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
    async afterUpload(res) {
      // this.article.img = res.url
      this.$set(this.article, "img", res.url);
    },
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>