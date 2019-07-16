function xx(y:number) {
    return function(x:number){
        console.log(x+y);
    }
}

// xx(5)(3);
export const logMiddleware = () => () => () => {
    console.log("hello")
};

console.log(logMiddleware()) 