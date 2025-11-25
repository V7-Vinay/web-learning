// objects
// single ton 
//object literal syntax
const symbolKey = Symbol('id')
const person = {
    name: "John",
    age: 30,
    "full name": "John Doe",
    [symbolKey]: 'id'
}

// console.log(person)
// console.log(typeof person)

// // accessing object properties
// console.log(person.name)
// console.log(person['name'])
// console.log(person["full name"])
// console.log(typeof symbolKey)
// person.age = 31
// console.log(person.age)
// Object.freeze(person.age)
// person.age = 32 // will not change
// console.log(person.age)
// person.name = "Jane"
// console.log(person.name)
// Object.seal(person)
// person.age = 33 // will change
// console.log(person.age)
// person.city = "New York" // will not add
// console.log(person.city)    
person.greeting = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
}
person.greeting()
console.log(person.greeting)
console.log(person)