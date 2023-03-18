import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const HomeView = () => import("@/views/Home");
const ProductView = () => import("@/views/Product");
const ReviewOrders = () => import("@/views/ReviewOrders");

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

const ReviewOrdersRoute = {
  path: "/review",
  name: "ReviewOrders",
  component: ReviewOrders,
};

const routes: RouteRecordRaw[] = [HomeRoute, ProductRoute, ReviewOrdersRoute];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const Routes = {
  Home: HomeRoute.name,
  Product: ProductRoute.name,
  ReviewOrders: ReviewOrdersRoute.name,
};

export { router, Routes };
