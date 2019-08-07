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

let para: any = {};
let children = para && para.go && para.go[0] ? { cc: 23 } : { cc: "null" };
console.log("children", children);

let numberA: number[] = [33, 21, 45, 43, 53, 56, 67, 997];
let ccv = numberA.map((data, index) => [index, data]);
let cx = ccv.sort((f, b) => f[1] - b[1]);
console.log(cx);
