const fs = require('fs')
 // console.log(fs)


//syncronous call blocking
 fs.writeFileSync('./test.txt',"hey vinay")


//Asyncronous call non blocking
fs.writeFile('./test.txt',"hey vinay1",(error=>{}))


//syncronous read returns smtg
 const phno=fs.readFileSync("./contact.txt","utf-8")
// console.log(phno);

//Asyncronous read , not returns anthing void
// fs.readFile("./contact.txt","utf-8",(err,res)=>{
//     if(err){
//         console.log("error")
//     }else{
//         console.log("Async",res)
//     }
// })


//  fs.appendFileSync(`./contact.txt `,` \n ${new Date()} hello vinay`)
// fs.appendFileSync("./contact.txt","hello vinay \n")

fs.cpSync("./test.txt","./copt.txt");

// fs.unlinkSync("./copt.txt")
console.log(fs.statSync("./contact.txt"))