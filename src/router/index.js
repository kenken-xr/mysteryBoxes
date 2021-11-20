import { createRouter,createWebHistory} from "vue-router";
import homePage from '../views/homePage'
import recipe from '../components/co-recipe/co-recipe'
import recipe1 from "@/components/co-recipe/recipe1";
import recipe2 from "@/components/co-recipe/recipe2";
import introd from '../components/co-introdu/co-introduce'
import travel1 from '../components/co-traval/travel1'
import music1 from '../components/music/music1.vue'
import music3 from '../components/music/music3.vue'
import others1 from '../components/others/others1.vue'
import others2 from '../components/others/others2.vue'
import others3 from '../components/others/others3.vue'
import photo1 from '../components/photo/photo1.vue'
import photo2 from '../components/photo/photo2.vue'


const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/homePage',
        name: 'homePage',
        component: homePage
      },
      {
        path: '/recipe',
        name: 'recipe',
        component: recipe
      },
      {
        path: '/',
        name: 'introd',
        component: introd
      },
      {
        path: '/home/:num',
        name: 'travel1',
        component: travel1
      },
      {
        path: '/recipe1',
        name: 'recipe1',
        component: recipe1
      },
      {
        path: '/recipe2',
        name: 'recipe2',
        component: recipe2
      },
      {
        path: '/music1', 
        name:'music1',
        component: music1
      },{
        path: '/music3', 
        name:'music3',
        component: music3
      },
      {
        path: '/others1', 
        name:'others1',
        component: others1
      },
      {
        path: '/others2', 
        name:'others2',
        component: others2
      },
      {
        path: '/others3', 
        name:'others3',
        component: others3
      },
      {
        path:'/photo1',
        name:'photo1',
        component:photo1
      },
      {
        path:'/photo2',
        name:'photo2',
        component:photo2
      }
    ]
  })

  export default router
