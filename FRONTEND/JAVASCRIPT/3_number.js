// Different types of numbers in JavaScript
//run using node 3_number.js to get better understanding

let x=5 //integer
let y=5.5 //float
let z= -10 //negative number

console.log("Integer:",x)
console.log("Float:",y)
console.log("Negative Number:",z)
console.log("Type of x:",typeof x)

x=123e5 //123000000
console.log("x in exponential form:",x)
y=123e-5 //0.00123
console.log("y in exponential form:",y)

// NaN - Not a Number
let a= "hello"
let b= 5
let c= a-b
console.log("Value of c (a-b):",c)
console.log("Type of c:",typeof c)

// + concatenation operator
let str1="Hello"
let str2="World"
let str3= str1 + " " + str2
console.log("Concatenated String:",str3)

str1="5"
str2=10
console.log("number - Number:", str1 - str2) //   string is converted into number and then subtraction is performed
// -,/,*,% the operators convert strings to numbers and then perform arithmetic operations

str1="hello"
str2="world"
console.log("string - string:", str1 - str2)// NaN because string cannot be converted to number for subtraction
console.log("number * string:", b * str2)// string operation -,*,/ is nan because string cannot be converted to number for these operations

console.log("type of nan :",typeof NaN) // number
console.log("type of undefined :",typeof undefined) // undefined
console.log("type of null :",typeof null) // object

 x =  2 / 0;
 console.log("2 divided by 0:",x); // Infinity
 console.log("type of Infinity :",typeof x) // number

 let d = new Number(123);
 console.log("Value of d:",d);
 console.log("Type of d:",typeof d); // object

//  Do not create Number objects.
// The new keyword complicates the code and slows down execution speed

console.log(Number("123"))  // returns 123
console.log(Number("123abc"))  // returns NaN , if the string cannot be converted to a number returns NaN
console.log(Number(false))     // returns 0

console.log(parseInt("123.45"))    // returns 123 , only the integer part is returned
console.log(parseFloat("123"))  // returns 123.45