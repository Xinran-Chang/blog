<template>
  <el-container style="height: 100vh;">
    <el-aside width="250px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1','2','3']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-files"></i>Article
          </template>
          <el-menu-item-group>
            <template slot="title">ArticleClassification</template>
            <el-menu-item index="/article/list">ArticleList</el-menu-item>
            <el-menu-item index="/article/create">ArticleManagement</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-collection-tag"></i>Classification
          </template>
          <el-menu-item-group>
            <template slot="title">Classification</template>
            <el-menu-item index="/classification/create">ClassificationList</el-menu-item>
            <el-menu-item index="/classification/list">ClassificationManagement</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-collection-tag"></i>AdminManagement
          </template>
          <el-menu-item-group>
            <template slot="title">AdminUser</template>
            <el-menu-item index="/adminuser/list">AdminUserList</el-menu-item>
            <el-menu-item index="/adminuser/create">AdminUserEdit</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    return{
      
    }
  }
};
</script>