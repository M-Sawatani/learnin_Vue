var app = new Vue({
  el: "#app",
  data: {
    message1: "",
    message2: "",
    message3: "",
    message4: "",
    isClicked1: false,
    isClicked2: false,
    isClicked3: false,
    clsHappy: "uk-text-success"
  },
  methods: {
    clickHandler1: function($event, message) {
      if (!this.isClicked1) {
        this.message1 = message;
        this.isClicked1 = true;
      } else {
        this.message1 = "Hello Vue.js!!";
        this.isClicked1 = false;
      }
      console.log($event);
    },
    clickHandler2: function() {
      this.message2 = new Date().toLocaleTimeString();
      this.isClicked2 = true;
    },
    clickHandler3: function() {
      this.isClicked3 = true;
      UIkit.notification({ message: "Shift + Click", status: "danger" });
    },
    clearText1: function() {
      this.message3 = "";
    },
    clearText2: function() {
      this.message4 = "";
    }
  }
});
