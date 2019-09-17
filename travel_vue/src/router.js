import Vue from 'vue'
import Router from 'vue-router'

// import Header from './components/Header.vue'
import HeaderDetail from './components/HeaderDetail.vue'
// import Header1 from './components/Header1.vue'
// import Carousel from './components/Carousel.vue'
import App from './App.vue'
// import Footer from './components/Footer.vue'
import Index from './views/Index.vue'
// import Product from './views/Product.vue'
// import Reg from './views/Login_Reg.vue'
import ProductDetail from './views/ProductDetail.vue'


Vue.use(Router)

export default new Router({

  routes: [
    {path: '/',component: App},
    // {path: '/Header',component: Header},
    {path: '/HeaderDetail',component: HeaderDetail},
    // {path: '/header1',component: Header1},
    // {path: '/carousel',component: Carousel},
    // { path:'/Footer',component:Footer},
    { path:'/Index',component:Index},
    // { path:'/Product',component:Product},
    { path:'/ProductDetail',component:ProductDetail},
    // { path:'/Reg',component:Reg},
  ]
})
