let flag = false; //基本数据类型
let arr = ["hir", 123, "66"]; //数组类型
// console.log(arr[1])
let arrtuple = [666, "hufan"]; //元组类型
var Glag;
(function (Glag) {
    Glag[Glag["success"] = 0] = "success";
    Glag[Glag["fail"] = 3] = "fail";
    Glag[Glag["good"] = 4] = "good";
})(Glag || (Glag = {})); //enum 类型
let s = Glag.good; //表示下标类型
// console.log(s)
let nums; //choose type
let neverType; //
// define function
//es5
let funcES5 = function () {
    return "es5";
};
function funcES5P() {
    return "es5";
}
//TS
function add(para1, para2) {
    return para1 + para2;
}
let add2 = function () {
    return 5;
};
//--choose para
function choosePara(name, age) {
    return name + age;
}
// console.log(choosePara("hhah",34))
//-- defaule para
function functionDefaule(name, age = 20) {
    return name + age;
}
//	last  para
function sum(a, b, ...result) {
    return result.length;
}
function reload(str) {
    //和一个实现体
    if (typeof str == "string") {
        return "my name is " + str;
    }
    else {
        return str;
    }
}
console.log(reload(45));
//箭头函数 this 指向上下文
setTimeout(() => {
    console.log(reload("hufan"));
}, 34);
// 关于面向对象。
// es 5 中常见的面向对象是两种方式 对象代理和原型链。 对象代理可以继承函数内部的方法并且传递参数。
// 但是不能继承 原型链上的方法，
// 原型链可以继承所有方法但是不能传递 构造参数。
// 同时组合使用两种方式可以完成 继承加 传递参数。
//abstruct 抽象类 ／ 类似 c++里面的虚基类 中间必须包含抽象方法。继承之后抽象方法必须被实现。
// 接口
// 属性接口 对接口的约束
function printLabel(label) {
    console.log(label.label);
}
// para interface
function printName(name) {
    //must first name seconName
    console.log(name.firstName + "--" + name.secondName);
}
var obj = {
    age: 45,
    firstName: "h",
    secondName: "f"
};
// 直接使用 会报错，间接使用不会。
printName(obj);
let ma5 = function (key, value) {
    return key + value;
};
// console.log(ma5("name","zhangsan"))
// 可索引接口
let arrnumber = [1, 2, 3];
let arrs = ["aaa", "bbbb"];
console.log(arrs[0]);
let arrO = { name: "zhangsan" };
class Dog {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + "eat");
    }
}
var ds = new Dog("xiaohei");
ds.eat();
class dev {
    constructor(name) {
        this.name = name;
    }
    coding(types) {
        console.log(this.name + "---" + types);
    }
}
class Child extends dev {
    //父类继承，和接口继承
    constructor(name) {
        super(name);
    }
    set() {
        console.log("set iphone");
    }
    work() {
        console.log("work in school");
    }
}
let w = new Child("hufan");
console.log(w.name);
w.coding("c++");
w.work();
//什么是泛型
//只能返回string
function getData(value) {
    return value;
}
// 同时返回 string and number; 使用any是没有问题的，但是使用any放弃了类型检查，但是此时又必须使用类型检查。
// 泛型 可以定义不特定的类型
function getDateT(value) {
    console.log(value);
}
getDateT(123);
class MinClass {
    constructor() {
        this.list = [];
    }
    add(value) { }
    min() {
        var minNum = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
let m1 = new MinClass();
let SetDate = function (value1, value2) {
    return value1 + value2;
};
let getData1 = function (value) {
    return value;
};
console.log(getData1("123"));
function getData2(value) {
    return value;
}
let myGet = getData2;
// //正则表达式
// let contentOfHTML = `"<!DOCTYPE html>
// <html>
// <head>
// <title>0001</title>
// <meta charset="utf-8"/>
// <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0"/>
// <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
// <meta name="author" content="heshumeng;hsmgod@126.com"/>
// <link rel="stylesheet" type="text/css" href="../../css.css">
// </head>
// <body>
// <div id="container">
// <p>
// 高15.4cm，口径7.8cm，底径5.4cm。1990年10月，杭州市半山镇石塘村战国墓出土。</p>
// <p>
// 战国时期，玉器生产进入鼎盛阶段，玉器加工工艺不断进步，水晶杯便是在这样的背景下诞生。此杯用整块优质天然水晶制成，素面无纹，造型简洁，为迄今为止我国出土的早期水晶制品中最大的一件。</p>
// </div>
// </body>
// </html>
// "`;
// /(?<=(<p>))[.\\s\\S]*?(?=(<p>))/
// let patt = /(?<=c).+(?=\r)/g;
// let string = "<p>胡凡哈哈哈哈哈啊哈哈哈哈<p>"
// let pt = /<p>(\S*)<p>/
// let is_alpha1 = contentOfHTML.match(pt);
// console.log("00000" + is_alpha1)
/**
 *
 * @param name ()=>void
 */
function getName1(name) {
    console.log("getName is first");
}
getName1(() => console.log("Param is first"));
console.log("hufanx");
//# sourceMappingURL=index.js.map