// import libraries
const express = require('express');
const closures = require('./Closures')
const currying = require('./Currying')

const PORT = 4000;
const app = express();
app.use(express.json());

// create a express server
app.listen(PORT, () => {
    console.log(`Server created on port ${PORT}`);
});

// ******** closure example. memorize values
// const memorizeSquare = closures.memorizeSquare()
// console.log(memorizeSquare(8))
// console.log(memorizeSquare(9))
// console.log(memorizeSquare(8))

// ******** currying example
//annonymus function returned and initialized to curriedSum, then call by passing single arguments
const curriedSum = currying.curry(currying.sum)
console.log(curriedSum(2)(3)(5))