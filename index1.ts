function getName(name: () => void) {
	console.log("getName is first")
}


getName(()=>console.log("Param is first"))
let getNameReturn = getName(()=>"hahah")

interface USB{
    big:string;
    length:string;
}

function xiaoming(s:USB){
    console.log(s.big);
}
let x = {big:"6666",length:"777"}
xiaoming(x);

let t1 = false
let t2 = true
let t3 = 3

let y = t1 && t2 && t3;

console.log(y)

let arrTest:Array<number> = [];
for (let index = 0; index < 5; index++) {
    arrTest.push(index);
}
console.log("\n")

let testAsync = async ()=>{
    setTimeout(()=>{
        return 5;
    },3000)
    return 3
}

let testSecondPromise = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>5,3000)
    })
}
console.log(testAsync)

let testPromise = () => {
    return new Promise((resolve,reject)=>{
        resolve(1)
    })
}
console.log(testPromise())
testPromise()
.then(testPromise => {console.log("testPromise",testPromise); return testAsync()})
.then(testAsync=>{console.log("testAsycn",testAsync)})


let obje = {
    "array":["3",4,7],
    'size':26,
    loaded:false,
}

type a = "aaa"|"sss";

function threeDot(status:{}){
    return {...status,
            loaded:true}
}
let logout = threeDot(obje)
console.log(logout)

function test ():a{
    return "aaa"
}



