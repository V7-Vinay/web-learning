const score=500
console.log(score)
const balance=new Number(1000)
console.log(balance)
console.log(balance.toString())
console.log(balance.toFixed(2))

const largeNumber=120.156
console.log(largeNumber.toPrecision(2))

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'))
const num =3.4
// abs , round , ceil , floor , min , max , random , pow , sqrt
console.log(Math.abs(-num))
console.log(Math.round(num))
console.log(Math.ceil(num)) 
console.log(Math.floor(num))
console.log(Math.min(1,4,6,-3,0))
console.log(Math.max(1,4,6,-3,0))

console.log(Math.random()) // generates random number between 0 and 1
console.log(Math.random()*10) // generates random number between 0 and 10
console.log(Math.floor(Math.random()*10)) // generates random integer between 0 and 9

console.log(Math.pow(2,3)) // 2^3=8
console.log(Math.sqrt(16)) // 4

const min= 10
const max= 50
const randomInt= Math.floor(Math.random() * (max - min + 1))+ min
console.log(randomInt ) // generates random integer between 10 and 50 inclusive   