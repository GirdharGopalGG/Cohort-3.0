interface User {
    name:string,
    age:number,
    address?:{
        city:string,
        country:string
    }
}

let user1:User= {
    name:'gg',
    age:65,
    address:{
        city:'ggpur',
        country:'sf'
    }
} 

let user2:User = {
    name:'gg2',
    age:12
} 

function isLegal(user:User):boolean{
    if(user.age<18) return false
    return true
}

console.log(isLegal(user1))
console.log(isLegal(user2))



interface People{
    name:string,
    age:number,
    greet:()=>string
}

let p1 :People={
    name:'gg',
    age:33,
    greet() {
        return 'hi'
    },
} 

console.log(p1.greet())


interface User{
    name:string,
    age:number
}

class Managers implements User{
   
    constructor(public name:string, public age:number){
        this.name= name
        this.age = age
    }
}