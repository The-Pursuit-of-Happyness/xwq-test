import ("./index.postcss");

export default {
  template: require("./index.tpl"),
  data() {
    return {
      message: "text"
    };
  },
  mounted() {
    console.log("---------------------");
  }
};