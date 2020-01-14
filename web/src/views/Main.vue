<template>
  <div>
    <div class="header">
      <div class="top">
        <div class="top-con d-flex js-between">
          <div>你好，欢迎来到我的博客!</div>
          <div class="hover">
            <a herf="#" class="iconfont icon-phone mr-3"></a>
            <a herf="#" class="iconfont icon-Mailletterenvelope mr-2"></a>
          </div>
        </div>
      </div>
      <div class="nav">
        <div class="nav-con d-flex js-between">
          <img src="../assets/logo.jpeg" />
          <div class="list d-flex f-family">
            <div class="nav-items flex-1 active">
              <router-link tag="div" to="/">
                首页
                <span class="text-org">_</span>HOME
              </router-link>
            </div>
            <div class="nav-items flex-1">
              <router-link tag="div" to="/">
                关于
                <span class="text-org">_</span>ABOUT
              </router-link>
            </div>
            <div class="nav-items flex-1">
              联系
              <span class="text-org">_</span>CONTACT
              <router-link tag="div" to="/"></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top {
  height: 30px;
  border-bottom: 1px solid #eeeeee;
}

.top-con {
  line-height: 30px;
  width: 800px;
  margin: 0 auto;
}

.nav-con {
  width: 800px;
  margin: 0 auto;
}

.nav-con img {
  margin: 50px 0;
  height: 80px;
  width: 100px;
  border-radius: 50%;
}

.list {
  margin: 50px 0;
  width: 500px;
  height: 80px;
}

.nav-items {
  line-height: 80px;
  font-size: 18px;
}
.hover a:hover {
  color: #f47e00;
}
</style>