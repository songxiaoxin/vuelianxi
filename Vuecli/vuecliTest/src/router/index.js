import Vue from 'vue'   //插件包
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' //模板
import Hi from '@/components/Hi' //模板
import Hi1 from '@/components/Hi1' //模板
import Hi2 from '@/components/Hi2' //模板
import HAHA1 from '@/components/HAHA1' //模板
import HAHA2 from '@/components/HAHA2' //模板
import Params from '@/components/params' //模板

Vue.use(Router)  //全局使用了router

export default new Router({
  routes: [
    {
      path: '/',  //路径
      name: 'HelloWorld',
      components: { //对应的组件
          default:HelloWorld,
          left:HAHA1,
          right:HAHA2,
      }
    },
      {
          path: '/Hi',  //路径
          component: Hi , //对应的组件
          children:[
              {path:'/',name:'hello/Hi',component:Hi},
              {path:'hi1',name:'hi1',component:Hi1},
              {path:'hi2',name:'hello/Hi/Hi2',component:Hi2},
          ]
      }  , {
          path: '/Songxiaoxin',  //路径
          name: 'HelloWorld',
          components: { //对应的组件
              default:HelloWorld,
              left:HAHA2,
              right:HAHA1,
          }
      },{
            path:'/params/:newsId(\\d+)/:newsTitle',  //（）表示的是正则
          component:Params
      }
  ]
})
