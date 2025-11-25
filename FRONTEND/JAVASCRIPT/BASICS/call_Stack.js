// javascript execution context
// run using node call_Stack.js to get better understanding

//{}global execution context
//gets wrapped in this
//in browser window object
//in node global object
//SINGLE THREADED

// function execution context
//EVAl execution context

//in global execution context
// memory creation phase or creation phase
//execution phase
let a =10;
let b =20;
function addTwoNumbers(num1,num2){
    let sum = num1 + num2;
    return sum;
}
let result = addTwoNumbers(a,b);
let result2 = addTwoNumbers(5,15);

//  1 global execution in this

// 2 memory phase
// a=undefined
// b=undefined
// addTwoNumbers = function definition
// result = undefined
// result2 = undefined

//3 execution phase
// a=10
// b=20
// result = addTwoNumbers(10,20) -> returns 30
// when function is called a new execution context(box) is created for that function
//new variable environment is created for that function
//+ execution thread 
//now for this new execution context
// 1 memory creation phase
// num1=undefined
// num2=undefined
// sum=undefined
// 2 execution phase
// num1=10
// num2=20
//total=30
// function execution context is destroyed after execution is done
// result2 = addTwoNumbers(5,15) -> returns 20


//  call stack
// it is a stack data structure which follows LIFO(Last In First Out) principle
// it keeps track of function execution context
// when a function is called a new execution context is created and pushed onto the call stack
// when the function execution is completed the execution context is popped off from the call stack