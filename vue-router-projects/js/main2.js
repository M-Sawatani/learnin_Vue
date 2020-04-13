const Top = {
  template: "<div>Top</div>",
};

const User = {
  template: `<div class="user">
                    <h2>User {{ $route.params.userId }}</h2>
                    <router-view></router-view>
                    </div>`,
};

const Profile = {
  template: `<div class='profile'>
                    <h3>Profile {{ $route.params.userId }}</h3>
                  </div>`,
};

const Posts = {
  template: `<div class='posts'>
                    <h3>Posts {{ $route.params.userId }}</h3>
                  </div>`,
};

const router = new VueRouter({
  routes: [
    {
      path: "/user/:userId",
      component: User,
      children: [
        {
          path: "profile",
          component: Profile,
        },
        {
          path: "posts",
          component: Posts,
        },
      ],
    },
  ],
});

const app = new Vue({
  router,
}).$mount("#app");
