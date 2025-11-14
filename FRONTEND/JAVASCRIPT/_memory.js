// STACK MEMORY(PRIMTIVE):
// GIVES A COPY OF THE VALUE 

import { useTransition } from "react"

// HEAP MEMORY(NON PRIMITIVE):
// GIVES THE REFERENCE TO THE VALUE

let ytname="gccgh"
let another =ytname
another ="hhh0"

console.log(ytname)
console.log(another)

let userOne = {
    email:"vinyvini@gmail.com"
}
let userTwo=userOne

userTwo.email="viny@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);