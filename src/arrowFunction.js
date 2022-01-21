const person = {
    name: "pramuditha",
    hobbies: ['Chess', 'Football'],
    printBio() {
        const printHobbies = function() {
            return `${this.hobbies[0]} and ${this.hobbies[1]}`
        }
        console.log(`My name is ${this.name}`)
        console.log(`I like ${printHobbies()}`)
    }
}

person.printBio()
// VM749:8 My name is pramuditha
// VM749:6 Uncaught TypeError: Cannot read properties of undefined (reading '0')
//***************************************************************************************************** */
const person = {
    name: "pramuditha",
    hobbies: ['Chess', 'Football'],
    printBio() {
        const printHobbies = () => {
            return `${this.hobbies[0]} and ${this.hobbies[1]}`
        }
        console.log(`My name is ${this.name}`)
        console.log(`I like ${printHobbies()}`)
    }
}

person.printBio()
// VM791:8 My name is pramuditha
// VM791:9 I like Chess and Football
