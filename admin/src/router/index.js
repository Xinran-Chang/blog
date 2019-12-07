import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ArticleList from '../views/ArticleList.vue'
import ArticleEdit from '../views/ArticleEdit.vue'
import ClassificaitonList from '../views/ClassificaitonList.vue'
import ClassificationEdit from '../views/ClassificationEdit.vue'

Vue.use(VueRouter)

const routes = [
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
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
