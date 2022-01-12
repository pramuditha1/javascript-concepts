exports.sum = (a, b, c) => {
    return a + b + c
}

/*
to call above function : sum(2,3,5)
....... apply currying to above function .......
transform sum from calling it with all the 3 arguments to calling it with one argument at a time(nested functions)
sum(2,3,5) to sum(2)(3)(5)
*/
exports.curry = (fn) => {
    //create annonymus nested functions that accept one argument
    return (a) => {
        console.log(`level 1 a: ${a}`)
        return (b) => {
            console.log(`level 1 a: ${a} , b: ${b}`)
            return (c) => {
                console.log(`level 1 a: ${a} , b: ${b} , c:${c}`)
                //fn is passed as a paramater to curry function.
                //in here fn is sum & return sum here
                return fn(a, b, c)
            }
        }
    }
}
