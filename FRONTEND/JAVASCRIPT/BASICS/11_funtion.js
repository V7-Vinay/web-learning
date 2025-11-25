const user ={
    name:"viny",
    price : 100,
    welcome : function(){
        console.log(`Welcome ${this.name}`);
        console.log(this);
    }
}

user.welcome();
user.name="kumar"
user.welcome();
console.log(this);

// function test(){
//     let a =10;
//     console.log(this.a);  inside function this refers to window object
// }
// test()
const chai =function(){
    let name ="chai";
    console.log(this);
}
chai();

const arrowFunction =()=>{
    console.log(this);
}
arrowFunction();

const addTwo = (a,b)=> (a+b);
console.log(addTwo(5,10));

const adObj = (a,b)=> ({name:"viny", price: a+b});
console.log(adObj(5,15));

// IIFE - Immediately Invoked Function Expression
(function(){
    console.log("IIFE executed");
})();
(function(name){
    console.log(`IIFE executed with name: ${name}`);
})("viny");
((name)=>{
    console.log("IIFE arrow function executed with name:",name);
})("kumar");
