// グローバルコンポーネント登録の場合

// Vue.component("uk-card-component", {
//   props: ["post"],
//   template: `<div class="uk-card uk-card-default uk-card-body uk-width-1-3@m">
//         <div class="uk-card-badge uk-label">{{ post.badge }}</div>
//         <h2 class="uk-card-title">{{ post.title }}</h2>
//           <p>{{ post.content }}</p>
//           <hr class='uk-margin-small'>
//           <ul class="uk-list uk-list-bullet">
//             <li v-for='note in post.notes'>{{ note }}</li>
//           </ul>
//     </div>`
// });

// ローカルコンポーネント登録方法の場合
var componentA = {
  props: ["post"],
  template: `<div class="uk-card uk-card-default uk-card-body uk-width-1-3@m">
        <div class="uk-card-badge uk-label">{{ post.badge }}</div>
        <h2 class="uk-card-title">{{ post.title }}</h2>
          <p>{{ post.content }}</p>
          <hr class='uk-margin-small'>
          <ul class="uk-list uk-list-bullet">
            <li v-for='note in post.notes'>{{ note }}</li>
          </ul>
    </div>`
};

var app = new Vue({
  el: "#app",
  data: {
    posts: [
      {
        badge: "tag1",
        title: "Title1",
        content: `Hello Vue.js!!`,
        notes: [
          "comment1....................",
          "comment2....................",
          "comment3....................",
          "comment4...................."
        ]
      },
      {
        badge: "tag2",
        title: "Title2",
        content: `Hello Vue.js!!`,
        notes: ["comment5...................."]
      },
      {
        badge: "tag3",
        title: "Title3",
        content: `Hello Vue.js!!`,
        notes: [
          "comment6....................",
          "comment7....................",
          "comment8....................",
          "comment9....................",
          "comment10...................."
        ]
      }
    ]
  },
  components: {
    "uk-card-component": componentA
  }
});
