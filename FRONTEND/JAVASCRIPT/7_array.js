// // array
 const fruits = ['apple', 'banana', 'cherry'];
// // different data types can be stored in an array
// //resizeable and mutable
// fruits.push('date');// adds element at the end
// console.log(fruits); // ['apple', 'banana', 'cherry', 'date']

// // accessing elements
// console.log(fruits[0]); // 'apple'
// console.log(fruits[2]); // 'cherry'
// //shallow copy : share  reference copy  ie array copies by reference

// //array methods
// fruits.pop(); // removes last element
// console.log(fruits); // ['apple', 'banana', 'cherry']
// fruits.shift(); // removes first element
// console.log(fruits); // ['banana', 'cherry']
// fruits.unshift('avocado'); // adds element at the beginning
// console.log(fruits); // ['avocado', 'banana', 'cherry']

// fruits.splice(1, 0, 'blueberry'); // adds 'blueberry' at index 1
// console.log(fruits); // ['avocado', 'blueberry', 'banana', 'cherry']

// const newArr=fruits.join()
// console.log(fruits); // ['avocado', 'banana', 'cherry']
// console.log(newArr); // 'avocado,blueberry,banana,cherry'
// console.log(typeof newArr); // 'string'

// slice , splice

const citrus = fruits.slice(0, 2); // creates a new array with elements from index 0 to 1
console.log(citrus);
// citrus.splice(0,2) // removes 2 elements from index 0
// console.log(citrus);
citrus.splice(1,0,'kiwi') // adds 'kiwi' at index 1
console.log(citrus);
citrus.splice(1,1,'mango') // removes 1 element at index 1 and adds 'mango'
console.log(citrus); // ['apple','mango', 'banana']