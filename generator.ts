




function* generator(fuc1: () => void, fuc2: () => void) {
    yield fuc1;
    yield fuc2;
}

var gen = generator(
    () => {
        setTimeout(() => 5
            , 10000)
    },
    () => {
        setTimeout(() => 10
            , 10000)
    });

console.log(gen.next())
console.log(gen.next()) 
