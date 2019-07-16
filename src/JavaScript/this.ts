function cc() {
  let a = "a";
  this.b = "b";
  console.log(this.b);
}

function foo() {
  return () => {
    return () => {
      return () => {
        console.log("id:", this.id);
      };
    };
  };
}

var f = foo.call({ id: 1 });

var f1 = f.call({ id: 2 })()();
var f2 = f().call({ id: 3 })();
var f3 = f()().call({ id: 4 });
