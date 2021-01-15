import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import work from '@/components/work'
import home from '@/components/home'
import login from '@/components/login'
import page from "@/views/page"
import count from "@/views/count"
const user = {
  template:`<div> <h1>我是父组件user</h1><router-view/> </div>`
}
const profile = {
  template:`<div> <h1>我是子组件profile</h1> </div>`
}
const posts = {
  template:`<div> <h1>我是子组件posts</h1> </div>`
}
const notFound = {
  template:`<div><h1>404页面未找到</h1></div>`
}
Vue.use(Router)


const router =  new Router({
  mode:'history',
  linkActiveClass:"nav",
  routes: [
    {
      path: '/',
      redirect:'/work'
      // name: 'HelloWorld',
      // component: HelloWorld
    },{
      path:'/work',
      name:'work',
      component:work
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/count',
      name:'count',
      component:count
    },
    {
      path:'/page',
      name:'page',
      component:page
    },
    {
      path:'/home/:id',
      name:'home',
      component:home
    },
    {
      path:'*',
      component:notFound,
      redirect(to){
        console.log(to);
        if(to.path === '/aaa'){
          return '/work'
        }else if(to.path === '/bbb'){
          return '/home/123'
        }else{
          return '/'
        }
      }
    },
    {
      path:'/user/:id',
      name:'user',
      component:user,
      children:[
        {
          path:'',
          name:'profile',
          component:profile
        },
        {
          path:'/posts',
          name:'posts',
          component:posts
        }
      ]
    }
  ]
})
// login
/*
router.beforeEach((to,from,next)=>{
  // console.log(to)
  if(to.path ==="/login"){
    next()
  }else{
    let token = localStorage.getItem("token");
    if(token===null || token===""){
      next("/login")
    }else{
      next()
    }
  }
})*/
export default router