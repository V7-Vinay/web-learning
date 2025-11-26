
function mulby5(num){
    return num*5
}
mulby5.power=2
console.log(mulby5(5));
console.log(mulby5.power);
console.log(mulby5.prototype);

function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.pritnMe=function(){
    console.log(`score: ${this.score}`)
}
const chai= new createUser("chai",25)
const tea=new createUser("tea",250)
chai.pritnMe()
