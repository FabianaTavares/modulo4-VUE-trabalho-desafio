import Vue from 'vue';
import VueRouter from 'vue-router';

import home from '../views/home.vue';
import ecommerce from '../views/ecommerce.vue';
import petshop from '../views/petshop.vue';

import listaProdutos from '../views/produtos/listaProdutos.vue';
import detalhesProdutos from '../views/produtos/detalhesProdutos.vue';

import pageNotFound from '../views/error/pageNotFound.vue';

import helloWord from '../components/helloWorld.vue';
//import PetShopLoja from '../components/PetShopLoja.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/petshop',
    name: 'petshop',
    component: petshop
  },
  {
    path: '/ecommerce',
    name: 'ecommerce',
    component: ecommerce,
    children: [
      {path: '', name: 'listaProdutos', component: listaProdutos},
      {path: ':id', name: 'detalhesProdutos', component: detalhesProdutos}
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: helloWord
  },
  {
    path: '*',
    name: '404',
    component: pageNotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router