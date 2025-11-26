// let myname="vinay     "
// console.log(myname.truelength);


let myHero=["thor","spider"]

let heroPower={
    thor:"hammer",
    spider:"sling",
    getSpiderPower:function(){
        console.log(`spidy power is${this.spider}`);
    }
}

Object.prototype.vinay=function(){
    console.log("vinay is everywhere");
}
// heroPower.vinay()
//myHero.vinay()

Array.prototype.veda=function(){
    console.log("she will there where vinay will be");
}

//myHero.veda()
//heroPower.veda() wont work

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailablr:false
}

const TASupport={
    makeAssignment:'js assisgnment',
    fulltime :true,
    __proto__:TeachingSupport
}

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUser="vinayry  "
String.prototype.truelength=function(){
    console.log(`${this}`)
    console.log(`true length : ${this.trim().length}`);
}
anotherUser.truelength()
"veda".truelength()