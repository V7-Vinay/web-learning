const descipter=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descipter);
// console.log(Math.PI);
// Math.PI=4
console.log(Math.PI);

const game={
    name : "sf4",
    memory:"3 GB",
    isOnline:"true",
    start:function name(params) {
        console.log("started")
    }
}
console.log(game)
console.log(Object.getOwnPropertyDescriptor(game , "name"))
Object.defineProperty(game,"name",{
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(game , "name"))

for(let [key,value] of Object.entries(game)){//on object iteration  not possible 
    if(typeof value!=='function'){//if u don't check whole function will get printed
        console.log(`${key }: ${value}`);
    }
}
