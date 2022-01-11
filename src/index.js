// import libraries
const express = require('express');
const closures = require('./Closures')

const PORT = 4000;
const app = express();
app.use(express.json());

// create a express server
app.listen(PORT, () => {
    console.log(`Server created on port ${PORT}`);
});

//closure example. memorize values
const memorizeSquare = closures.memorizeSquare()
console.log(memorizeSquare(8))
console.log(memorizeSquare(9))
console.log(memorizeSquare(8))