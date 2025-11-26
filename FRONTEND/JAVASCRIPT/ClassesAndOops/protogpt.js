// -------------------------------
// 1. CONSTRUCTOR FUNCTION
// -------------------------------
// A constructor function is used to create objects.
// By convention, constructor function names start with Capital letters.

function Person(name, age) {
    // When you use "new", JavaScript automatically creates "this = {}"

    // "this" refers to the new object being created.
    this.name = name;
    this.age = age;

    // returning "this" happens automatically.
}



// ----------------------------------------
// 2. ADDING METHODS USING PROTOTYPE
// ----------------------------------------
// Every function in JS has a hidden object called "prototype".
// All objects created using "new" will inherit from this prototype.

Person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
};

Person.prototype.getAge = function () {
    return this.age;
};

Person.prototype.isAdult = function () {
    return this.age >= 18;
};

// NOTE:
// We use prototype to avoid copying the same function into every object.
// It saves memory and makes behavior shared.


// ----------------------------------------
// 3. USING "new" TO CREATE OBJECTS
// ----------------------------------------

const p1 = new Person("Vinay", 20);
const p2 = new Person("Rahul", 15);


// ----------------------------------------
// 4. HOW "new" ACTUALLY WORKS INTERNALLY
// ----------------------------------------
/*
Step-by-step what "new Person()" does:

1. Create an empty object:
   let obj = {};

2. Set the prototype:
   obj.__proto__ = Person.prototype;

3. Call the constructor:
   Person.call(obj, "Vinay", 20);

4. Return the object:
   return obj;
*/


// ----------------------------------------
// 5. TESTING THE OBJECTS
// ----------------------------------------

p1.sayHello(); // Hello, my name is Vinay
console.log(p1.getAge()); // 20
console.log(p1.isAdult()); // true

p2.sayHello(); // Hello, my name is Rahul
console.log(p2.getAge()); // 15
console.log(p2.isAdult()); // false

// ----------------------------------------
// 6. PROTOTYPE CHAIN DEMO
// ----------------------------------------
console.log(Person.prototype); // Shows all shared methods
console.log(p1.__proto__ === Person.prototype); // true
console.log(p2.__proto__ === Person.prototype); // true
