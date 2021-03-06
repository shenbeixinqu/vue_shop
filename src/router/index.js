import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/users/Users.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login},
    {path: '/home', component: Home, redirect:'/welcome' ,children:[
      {path: '/welcome',component:Welcome},
      {path: "/users", component: Users}
    ]}
  ]
})

// 挂在路由导航守卫
router.beforeEach( (to, from, next) => {
  // to 将要访问的页面
  // from 代表从哪个页面跳转而来
  // next 是一个函数,表示放行
  if(to.path == '/login') return next()
  const tokenStr = window.sessionStorage.getItem("token")
  if (!tokenStr) return next("/login")
  next() 
})

export default router