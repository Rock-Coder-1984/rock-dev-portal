const Home = () => import("@/view/index.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
];

export default routes;
