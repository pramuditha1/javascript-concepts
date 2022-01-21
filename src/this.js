/*
every function we implement in javascript has following methods by default

call - used to call a function. pass parameters one by one using commas
apply - used to call a function. pass parameters as and array 
bind - bind method returns a new function.
       Use it when you want that function to later be called with a certain context like events
*/
/*
1.
implicit binding -----------------------------------------------------------
when a function is invoked with the dot notation, 
the object to the left of that dot is what the this keyword is referencing

this keyword refers 'person' object
this.name as person.name
*/
const person1 = {
    name: 'Pramuditha',
    sayName () {
        console.log(`My name is ${this.name}`)
    }
}

sayName.call(person1)//call method
sayName.apply(person1)//apply method


/*
2.
explicit binding ----------------------------------------------------------
The first argument passed to call
*/
const person2 = {
    name: 'Pramuditha'
}

function sayName() {
    console.log(`My name is ${this.name}`)
}

sayName.call(person2)// call method
sayName.apply(person2)// call method

//When function accepts 2 parameters

function syaName(param1, param2){
    console.log(`My name is ${this.name}. 
                I'm interested in ${param1} and ${param2}`)
}

sayName.call(pearson2, 'Cricket', 'Swimming')//call method
sayName.apply(pearson2, ['Cricket', 'Swimming'])//call method

//bind method
const sayMyName = sayName.bind(pearson2, 'Cricket', 'Swimming')
sayMyName()//can use later time (within an event call)

/*
3.
We can invoke a function with the 'new' keyword
theose type of functions called as constructor functions
*/
function Person(name) {
    this.name = name
}

const p1 = new Person('Pramuditha')

/*
4. default binding
If none of the above 3 rules are satisfied, 
Javascript will default to the global scope and set 'this' keyword to the window object.

*/