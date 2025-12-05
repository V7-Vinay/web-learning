const { log } = require("console");
const fs=require("fs");

console.log("1")

//blocking
// const result=fs.readFileSync("contact.txt","utf-8")
//console.log(result)

//non blocking
fs.readFile("contact.txt","utf-8",(err,res)=>{
    console.log(res);
})

console.log("2")
//default thread pool size -4
