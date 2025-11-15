let c=10
const d=20
if(true){
    const c=20
     const d=30
    // console.log(d)
    // console.log(c+d)
}   
 c=15
// console.log(c)
// console.log(d)

function test(){
    const googleAccount ="vinyvini718@gmail.com"
    function loginYoutube(){
        const youtubeAccount ="vinyyoutub718"
        console.log(googleAccount)
        console.log(youtubeAccount)
    }
    console.log(googleAccount)
  //  console.log(youtubeAccount) // error youtubeAccount not defined
    loginYoutube()
}
// test()
console.log(addOne(5))// function hoisting calling or accesing before declaration is hoisting
// console.log(addTwo(5)) // error addTwo is not defined

function addOne(num){//function declaration it can be hoisted 
    return num+1
}
// console.log(addTwo(5))

const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))