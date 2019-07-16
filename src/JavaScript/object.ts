let o = {
  a: 1,
  b: function() {
    console.log("say b");
  },
  c: (function() {
    return "c";
  })(),
  d: (function() {
    return {
      o1: (function() {
        return "o1";
      })()
    };
  })()
};

console.log(o);
