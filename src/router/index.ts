import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const HomeView = () => import("@/views/Home");
const ProductView = () => import("@/views/Product");

const HomeRoute = {
  path: "/",
  name: "Home",
  component: HomeView,
};

const ProductRoute = {
  path: "/product/:id",
  name: "Product",
  component: ProductView,
};

const routes: RouteRecordRaw[] = [HomeRoute, ProductRoute];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const Routes = {
  Home: HomeRoute.name,
  Product: ProductRoute.name,
};

export { router, Routes };
