const Top = {
  template: "<div>Top</div>"
};

const Users = {
  template: "<div>Users</div>"
};

const router = new VueRouter({
  routes: [
    {
      path: "/top",
      component: Top
    },
    {
      path: "/users",
      component: Users
    }
  ]
});

const app = new Vue({
  router
}).$mount("#app");
