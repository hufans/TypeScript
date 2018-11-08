var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getName(name) {
    console.log("getName is first");
}
getName(() => console.log("Param is first"));
let getNameReturn = getName(() => "hahah");
function xiaoming(s) {
    console.log(s.big);
}
let x = { big: "6666", length: "777" };
xiaoming(x);
let t1 = false;
let t2 = true;
let t3 = 3;
let y = t1 && t2 && t3;
console.log(y);
let arrTest = [];
for (let index = 0; index < 5; index++) {
    arrTest.push(index);
}
console.log("\n");
let testAsync = () => __awaiter(this, void 0, void 0, function* () {
    setTimeout(() => {
        return 5;
    }, 3000);
    return 3;
});
let testSecondPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => 5, 3000);
    });
};
console.log(testAsync);
let testPromise = () => {
    return new Promise((resolve, reject) => {
        resolve(1);
    });
};
console.log(testPromise());
testPromise()
    .then(testPromise => { console.log("testPromise", testPromise); return testAsync(); })
    .then(testAsync => { console.log("testAsycn", testAsync); });
let obje = {
    "array": ["3", 4, 7],
    'size': 26,
    loaded: false,
};
function threeDot(status) {
    return Object.assign({}, status, { loaded: true });
}
let logout = threeDot(obje);
console.log(logout);
function test() {
    return "aaa";
}
//# sourceMappingURL=index1.js.map