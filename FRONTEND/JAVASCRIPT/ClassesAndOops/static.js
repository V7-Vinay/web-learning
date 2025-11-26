class user{
    constructor(fullname){
        this.fullname=fullname
    }

    logMe(){
        console.log(`username : ${this.fullname}`)
    }
    static createId(){
        return 123;
    }
}
const user1 =new user("f")
user1.logMe()
user1.createId()