import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
      path: "/",
      name: "catalog",
      component: () => import('@/views/CatalogPage'),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import('@/views/CartPage'),
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;