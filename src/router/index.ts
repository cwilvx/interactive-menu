import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const HomeView = () => import("@/views/Home");
const ProductView = () => import("@/views/Product");
const ReviewOrders = () => import("@/views/ReviewOrders");
const SelectTable = () => import("@/views/SelectTable");

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

const SelectTableRoute = {
  path: "/table",
  name: "SelectTable",
  component: SelectTable,
};

const routes: RouteRecordRaw[] = [
  HomeRoute,
  ProductRoute,
  ReviewOrdersRoute,
  SelectTableRoute,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const Routes = {
  Home: HomeRoute.name,
  Product: ProductRoute.name,
  ReviewOrders: ReviewOrdersRoute.name,
  SelectTable: SelectTableRoute.name,
};

export { router, Routes };
