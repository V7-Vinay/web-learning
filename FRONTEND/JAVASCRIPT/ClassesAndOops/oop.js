const user={
    username: " viiany",
    loginCount:4 ,
}

function User(username,loginCount){
this.username=username;
this.loginCount=loginCount;
this.greeting=function(){
    console.log(`welcome ${this.username}`);
}()
return this;
}
const userOne=new User("vinay,12")
const userTwo= new User("vijay,2")//new create new instances for each new object 
// if not the last one will over write evrything

console.log(userOne.constructor);
console.log(userTwo);

