const http=require("http");
// const fs=require("fs");
// const url=require("url");
const express = require("express");

const app1 =express();

app1.get("/",(req,res)=>{
    return res.send("hello from home");
});

app1.get("/about",(req,res)=>{
    return res.send(`hello from about ${req.query.q}`);
});

app1.get("/profile",(req,res)=>{
    return res.send(`profile page`);
});

app1.post
// function myHandler(req,res){
//     const log=`${Date()}:${req.url}:${req.method}:new request recived\n`
//     const myUrl=url.parse(req.url,true);
//     console.log(myUrl)
//     fs.appendFile("log.txt",log,(error,data)=>{
//     switch(myUrl.pathname){
//         case '/':
//             res.end("home");
//         break;
//         case '/about':
//             const userName=myUrl.query.name;
//             res.end(`hi ${userName}`);
//         break;

//          case '/search':
//             const resul=myUrl.query.search_query;
//             res.end(`here are u r resukts ${resul}`);
//         break
//         default:
//             res.end("404 not found")
//     }
//     });
//     // console.log(req);
// }

app1.listen(8000,()=>console.log("server started"));
// const myServer=http.createServer(app1);

// myServer.listen(8000,()=>console.log("server started"));