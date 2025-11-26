//  3 INSIDE a constructor
function setusername(username){
    this.username=username
    console.log("called")
}

function createuser(username,email,password){
   setusername.call(this,username)
    this.password=password
    this.email=email
}

const ni=new createuser("v","v@g","123")
console.log(ni);

function Student(name, age) {
    this.name = name;
    this.age = age;
}

function Developer(name, age, skills) {
    // Borrow Student constructor
    Student.call(this, name, age);

    this.skills = skills;
}

const dev = new Developer("Vinay", 20, ["JS", "React"]);
console.log(dev);


// 2 FUNCTION BORROWING
const person1 = {
    name: "Rahul",
    greet: function (city) {
        console.log(`Hi, I am ${this.name} from ${city}`);
    }
};

const person2 = { name: "Amit" };

// Borrow method from person1
person1.greet.call(person2, "Delhi");

// person1.greet("bang") 

//3)
// basic example
function sayHello() {
    console.log("Hello, I am " + this.name);
}

const user = { name: "Vinay" };

sayHello.call(user); 
// "this" becomes user
