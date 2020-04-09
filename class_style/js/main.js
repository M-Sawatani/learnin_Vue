var app = new Vue({
  el: "#app",
  data: {
    isLarge: true,
    hasError: true,
    largeClass: "large",
    dangerClass: "text-danger",
    dangerClsObj: {
      large: true, // JS側で、classの付け替えが簡単にできました！
      "text-danger": true
    },
    largeClsObj: {
      large: true,
      "bg-gray": true
    },
    styleObj: {
      color: "#faa05a",
      fontSize: "40px"
    }
  }
});
