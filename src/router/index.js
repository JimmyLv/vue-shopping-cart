import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Cart from '@/pages/cart'
import Detail from '@/pages/detail'
import NotFound from '@/pages/404'
import Counter from '@/pages/counter'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/cart' },
    { path: '/cart', component: Cart },
    { path: '/counter', component: Counter },
    { path: '/products/:id', component: Detail },
    { path: '*', component: NotFound },
  ],
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {

  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
