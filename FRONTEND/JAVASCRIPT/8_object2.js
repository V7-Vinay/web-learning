// const shadowUser = new Object() // single ton object
// console.log(shadowUser)
// const anotherUser = {} // object literal syntax
// console.log(anotherUser)

// // adding properties to the object
// shadowUser.username = "shadow"
// shadowUser.email = "   @gmail.com   "

// console.log(shadowUser)

const user = {
    email : "viny@gmail.com",
    userfullname:{
        userfullname : {
        firstname : "viny",
        lastname : "kumar"
        }
    }
}
// console.log(user.userfullname.userfullname)

const obj1={
    1:'a',
    2:'b'
}
const obj2={
    3:'c',
    4:'d'
}
// const mergedObj = {obj1,obj2}
//  console.log(mergedObj)
// const obj3=Object.assign({},obj1,obj2)//store in new object ,if {} not used  in obj1 it will be stored 
// console.log(obj3)

// const mergedObj2={...obj1,...obj2} //spread operator
// console.log(mergedObj2)

// console.log(Object.keys(user)) //keys
// console.log(Object.values(user)) //values
// console.log(Object.entries(user)) //entries as array of arrays
// console.log(Object.hasOwn(user,'email')) //check property exists or not
// console.log(user.hasOwnProperty('email')) //old way to check property exists or not
// console.log(user.hasOwnProperty('emagil'))

const course ={
    title:'js',
    rating:4.5,
    instructor:'viny'
}
// console.log(course.instructor)
const {instructor:teacher,rating}=course //destructuring
//  console.log(instructor) this line can't be used when  delared like this instructor:teacher
 console.log(teacher)
 console.log(rating)
 