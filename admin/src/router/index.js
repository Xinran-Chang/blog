import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ArticleList from '../views/ArticleList.vue'
import ArticleEdit from '../views/ArticleEdit.vue'
import ClassificaitonList from '../views/ClassificaitonList.vue'
import ClassificationEdit from '../views/ClassificationEdit.vue'
import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { isPublic: true }
  },

  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      { path: '/article/list', component: ArticleList },
      { path: '/article/edit/:id', component: ArticleEdit, props: true },
      { path: '/article/create', component: ArticleEdit },
      { path: '/classification/list', component: ClassificaitonList },
      { path: '/classification/edit/:id', component: ClassificationEdit, props: true },
      { path: '/classification/create', component: ClassificationEdit },
      { path: '/adminuser/list', component: AdminUserList },
      { path: '/adminuser/edit/:id', component: AdminUserEdit, props: true },
      { path: '/adminuser/create', component: AdminUserEdit },
    ]
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  if(!to.meta.isPublic && !localStorage.token){
    return next('login')
  }
  next()
})
export default router
