
 let arrar=["sdf","dfd","dfd"]
// for (let i = 0; i < arrar.length; i++) {
//     console.log(arrar[i])
// }
//for of 
// const colors = ['red', 'green', 'blue'];

// for (const color of colors) {
//   console.log(color);
// }

// const  name = 'Alice in Wonderland';
// for(names of name){
//     console.log(names)
// }
const map =new Map()
map.set('in',"india")
map.set('fl',"folwer")
map.set('in',"india")



// console.log(map);
// for(const [key,value] of map){
//     console.log(key,value)
// }
const myobj={
    'name':'spioder',
    'num':3,
 }
// console.log(myobj)
// console.log(Object.keys(myobj))
// console.log(Object.values(myobj))
// console.log(Object.entries(myobj))

for(const key in myobj){
    console.log(key,myobj[key])
}
for(const x in arrar){
    console.log(arrar[x])
}
for(const y in map){
        console.log(map[y])//prints nothing

}