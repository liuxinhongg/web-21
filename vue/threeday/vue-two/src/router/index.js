import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import work from '@/components/work'
import home from '@/components/home'
const user = {
  template:`<div> <h1>我是父组件user</h1><router-view/> </div>`
}
const profile = {
  template:`<div> <h1>我是子组件profile</h1> </div>`
}
const posts = {
  template:`<div> <h1>我是子组件posts</h1> </div>`
}
Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:"nav",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/work',
      name:'work',
      component:work
    },
    {
      path:'/home/:id',
      name:'home',
      component:home
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
          path:'posts',
          name:'posts',
          component:posts
        }
      ]
    }
  ]
})
