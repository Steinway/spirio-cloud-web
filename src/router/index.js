import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutView from '../views/LayoutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    props: true,
    component: LayoutView,
    children: [
      {
        path: '',
        name: 'test',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/MasterView.vue')
      },
      {
        path: '/folder/:folderName',
        name: 'test',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/DetailView.vue')
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
