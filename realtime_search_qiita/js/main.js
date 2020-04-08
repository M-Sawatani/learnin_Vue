var app = new Vue({
  el: "#app",
  data: {
    items: null, // APIから取得した検索結果格納用
    keyword: "", // ユーザーが入力した検索キーワード
    message: "" // ユーザーに表示するメッセージ
  },
  computed: {
    activateClear: {
      get: function() {
        if (this.keyword === "") {
          return false;
        } else {
          return true;
        }
      }
    }
  },
  watch: {
    keyword: function(newval, oldval) {
      //   console.log(newval);
      this.message = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    }
  },
  created: function() {
    // $elプロパティは利用不可。moutedであれば利用可能。
    // this.keyword = "JavaScript";
    // this.getAnswer();
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000);
  },
  methods: {
    getAnswer: function() {
      if (this.keyword === "") {
        this.items = null;
        this.message = "";
        return;
      }
      this.message = "Loading...";
      var vm = this;
      var params = { page: 1, per_page: 20, query: this.keyword };
      axios
        .get("https://qiita.com/api/v2/items", { params })
        .then(function(resp) {
          vm.message = "Result:";
          console.log(resp);
          vm.items = resp.data;
        })
        .catch(function(error) {
          vm.message = `Error!! ${error}`;
        })
        .finally(function() {
          vm.messge = "";
        });
    },
    deleteKeyword: function() {
      this.keyword = "";
      this.items = null;
      this.message = "";
    }
  }
});
