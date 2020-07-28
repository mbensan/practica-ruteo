import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home';  // asumiendo que hicimos este componente
import Login from '../components/Login';
import Restoran from '../components/Restoran';
import Category from '../components/Category';
import NotFound from '../components/NotFound';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Images from '../components/Images';

Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
  routes: [
    {
        path: '/', 
        component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/:restoran',
      component: Restoran,
      name: 'Restoran',
      props: true,
      children: [
        {
          path: '',
          component: About
        },
        {
          path: 'reviews',
          component: Reviews
        },
        {
          path: 'images',
          component: Images
        }
      ]
    },
    {
      path: '/category/:nombre_categoria',
      component: Category,
      name: 'category',  // le dimos un apodo a la ruta
      props: true
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})