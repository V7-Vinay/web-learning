const { th } = require("framer-motion/client");

class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        return this._password.toUpperCase()// if u give same name as func then 
    }//  it will go on infinite loop 
    set password(value){
        this._password=value.toUpperCase()//also protects your real data being over written
    }
}
 
const name1 = new  user("h@gmail.com","guhyv8yg")
//console.log(name1.password);
//classes
 function usingProperty(email,password){
        this._email=email
        this._password=password
        Object.defineProperty(this,'email',{
            get:function(){
                return this._email.toUpperCase()
            },
             set:function(value){
                return this._email=value
            }
        })
    }
const newe = new usingProperty("r","g")
console.log(newe.email);

//using object
const person = {
    _name: "vinay",
    _age: 20
};

Object.defineProperty(person, 'name', {
    get: function () {
        return this._name.toUpperCase();
    },
    set: function (value) {
        this._name = value;
    }
});

Object.defineProperty(person, 'age', {
    get: function () {
        return this._age;
    },
    set: function (value) {
        this._age = value;
    }
});

console.log(person.name);  // VINAY (converted to uppercase)
person.name = "rahul";
console.log(person.name);  // RAHUL
