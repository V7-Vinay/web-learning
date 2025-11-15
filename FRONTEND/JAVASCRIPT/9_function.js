function sayName(){
    console.log("My name is ChatGPT");

}
// sayName();

function add(a,b){
    console.log(a+b) 
}
// add(5,10);

// const result = add(7,3);
// console.log(result); // undefined because add function does not return anything

function add1(a,b){
    console.log(a+b) 
    return a+b;
}

// //const result1 = add1(6,3);
// console.log(result1); // 9

function loginUser(username){
    if(username===undefined ){//!username can also be used
        console.log("Username is undefined");
        return // this return undefined here 
    }
    return `${username} logged in successfully`
}
loginUser("viny");
// console.log(loginUser("viny"));
// console.log(loginUser(""));//empty string passed
// console.log(loginUser());   //undefined passed

// const user1 = loginUser("alice");
// console.log(user1);

function CalculateCartPrice(val1,...num1){     //rest operator ...num1      
    return num1
}   
console.log(CalculateCartPrice(100))
console.log(CalculateCartPrice(100,200,300))

const anotheruser1 ={
    username:"viny",
    login(){
        console.log("user logged in")
    }
}

const anotheruser2 ={
    username:"kumar",
    price: 1000
}
function handleObject(obj){
    console.log(`Username is: ${obj.username} and price is ${obj.price}`  );
}
// handleObject(anotheruser2);
// handleObject(anotheruser1);
//  handleObject({username:"testuser",price:500});
const arrat1 = [1,2,3,4,5];
function secondvalue(getarray){
    return getarray[1];
}
console.log(secondvalue(arrat1));
console.log(secondvalue([10,20,30,40,50]));