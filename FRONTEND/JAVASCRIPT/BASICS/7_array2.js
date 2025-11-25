// array part 2

const fruits = ['apple', 'banana', 'cherry'];

const vegetables = ['carrot', 'broccoli', 'spinach'];

// fruits.push(vegetables)// Add 'date' to the end of the fruits array
// console.log(fruits)
// console.log(fruits[3][0])// Log the length of the fruits array
// fruits.pop()// Remove the last element from the fruits array
// const both = fruits.concat(vegetables)// Log the first element of the vegetables array
// console.log(both)
const all = [...fruits, ...vegetables]
// console.log(all)

const another_array=[1,2,3,4,[5,6,7,8],9,[10,11,12,[13,14]]]
const spread_array = another_array.flat(0)
// console.log(spread_array)

//  //console.log(Array.isArray("fruits"))
// console.log(Array.from("fruits"))
// console.log(Array.from({length:1},()=>fruits))
// console.log(Array.from({length:5},(_,i)=>i+1))

const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
}
const arrEntries = Array.from(Object.entries(obj))
console.log(arrEntries)
const arrKeys = Array.from(Object.keys(obj))
console.log(arrKeys)
const arrValues = Array.from(Object.values(obj))
console.log(arrValues)

 const arrCapital = Array.from(Object.values(obj),v=>String(v).toUpperCase())
 console.log(arrCapital)