function greet(name:string){
    console.log('hello '+name);
}
greet('ram')

function add(a:number,b:number){
    return a+b;
}
console.log(add(1,3))


function isLegal(age:number):boolean{
    if(age<18) return false;
    return true
}
console.log(isLegal(20))

function delayedCall(fn:()=>void){
    setTimeout(fn,3000)
}

function log(){
    console.log('hi ter')
}
delayedCall(log)

function greetObject(user:{name:string,age:number}){
    console.log(`hello ${user.name} your age is ${user.age}`)
}
const obj = {name:'gg',age:34}
greetObject(obj)

let x:number = 1
let y:string = 'gg'
console.log(x+y)