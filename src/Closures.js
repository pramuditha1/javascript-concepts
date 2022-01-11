/*
simple cache application using closures
memorizeSquare returns function which accepts a number as a argument
then it calls square() and get value is not exist in cache
*/

square = (num) => {
    return num * num;
}

exports.memorizeSquare = () => {
    let cache = []
    return function optimizeSquare (num) {
        if (num in cache) {
            console.log('Returning from cache')
            return cache[num]
        } else {
            console.log('Computing suqare')
            const result = square(num)
            cache[num] = result
            return result
        }
    }
}