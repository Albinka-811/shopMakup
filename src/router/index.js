import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Catalog from '../views/Catalog.vue';

const CatalogChildren = [
  {
    path: '',
    component: Catalog,
  },
  {
    path: 'catalog/:type',
    component: Catalog,
    meta: {
      breadcrumb: 'Clothes'
    },
  }
];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/women',
    name: 'Women',
    alias: '/women/catalog',
    meta: {
      breadcrumb: 'Women'
    },
    children: CatalogChildren
  },
  {
    path: '/men',
    name: 'Men',
    alias: '/men/catalog',
    meta: {
      breadcrumb: 'Men'
    },
    children: CatalogChildren
  },
  {
    path: '/page-url',
    name: 'PageName',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/pageName.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
