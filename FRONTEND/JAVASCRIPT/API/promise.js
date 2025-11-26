const promiseOne= new Promise(function(resolve,reject){
    //Do any Asynvc task
    ///DB calls ,Cryptograpy
    setTimeout(() => {
      //  console.log("async is completed");
        resolve()
    }, 1000);
})

promiseOne.then(function(){
   // console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(() => {
      //  console.log("async is completed task 2");
        resolve()
    }, 1000);
}).then(function(){
    //console.log("async 2 resolved")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"vinay",email:"vinyvini718@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
   // console.log(user)
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:"vinay",password:"123"})
        }else{
            reject('ERROR : Something Went Wrong')
        }
    },1000)
})

promiseFour
.then(function(user){
    console.log(user)
    return user.username
})
.then((username1)=>{
    console.log(username1)
})
.catch(function(error){
 //   console.log(error)
})
.finally(()=>{
  //  console.log("console is either rejected or resolved")
})

const promiseFive=new Promise(function(resolve,reject){
     setTimeout(function(){
        let error =false
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('ERROR : js Went Wrong')
        }
    },1000)
})

async function consumePromiseFive() {
 try{
    const response= await promiseFive
    console.log(response);
 }catch(error){
    console.log(error)
 }
}
consumePromiseFive()

// async function getAllUsers(params) {
//    try {
//     const resonpse = await fetch('https://api.github.com/users/V7-Vinay')
//     console.log(resonpse)
//     const data = await resonpse.json()
//     console.log(data)
//    } catch (error) {
//      console.log(error)
//    }
// }
// getAllUsers()

fetch('https://api.github.com/users/V7-Vinay').then((response)=>{
    return response.json()
}).then((user)=>{
    console.log(user)
})
.catch(function(error){
console.log("error")
})