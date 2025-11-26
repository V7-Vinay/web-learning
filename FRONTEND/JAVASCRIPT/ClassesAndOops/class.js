const { em } = require("framer-motion/client");
const { sup } = require("framer-motion/m");
const { use } = require("react");

 class user{
    constructor(username,email,password){
        this.email=email
        this.password=password
        this.username=username
    }
    encryptPassword(){
    return `${this.password}abc  `
    }
    changeCapital(){
        return `${this.username.toUpperCase()}`
    }
 }

 const obj =new user("eren","aot@fandom.anime","100")
 console.log(obj.encryptPassword());
  console.log(obj.changeCapital());

 //inheritance

 class car{
    constructor(car1){
        this.car1=car1
    }
    printCar(){
        console.log(`car name is:${this.car1}`)
    }
 }

 class color extends car{
    constructor(car1,color1){
        super(car1)
        this.color1=color1
    }
    printColor(){
        console.log(`${this.car1} has the color ${this.color1}`);
    }
 }

 const carName=new car("maruthi")
  const carColor=new color("maruthi","red")
  carName.printCar()
  carColor.printColor()

  console.log(carColor instanceof color)