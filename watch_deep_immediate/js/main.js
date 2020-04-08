var app = new Vue({
  el: "#app",
  data: {
    colors: [{ name: "Red" }, { name: "Green" }, { name: "Blue" }]
  },
  watch: {
    colors: {
      handler: function(newval, oldval) {
        console.log("update!");
        console.log(
          "new: %s,\nold: %s",
          JSON.stringify(newval, null, "\t"),
          JSON.stringify(oldval, null, "\t") // 参照するオブジェクトや配列が同じになるので、newval == oldvalになることに注意！
        );
      },
      deep: true, // true: ネストの深さに関係なく、変更されるとcallbackが呼ばれる
      immediate: true // true: 監視開始後すぐにcallbackが呼ばれる
    }
  }
});
