const name ="vinay"
const repcnt = 50

console.log("name is "+name + " and count is "+repcnt )

// string interpolation
console.log(`my name is ${name} and my repo count is ${repcnt}`)

const getname =new String(" damn it ")
console.log(`name is ${getname} and type is ${typeof getname}`)

console.log(getname[1])
console.log(getname.__proto__)

console.log(getname.toUpperCase())
console.log(getname)

console.log(getname.indexOf('i'))
console.log(getname.charAt(7))

const newString= getname.substring(0,4)
console.log(newString)//can't give negative values 

const anotherString= getname.slice(-7,6)
console.log(anotherString)//can give negative values

const useTrim= "   vinay   is v   "
console.log(useTrim.trim())

const url = "https://vinay%20.com"
console.log(url.replace('%20','-'))
