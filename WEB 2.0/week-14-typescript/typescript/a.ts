function greet(name:string){
    console.log(`hello ${name}`)
}
greet('gg')

function sum(n1:number,n2:number){
    console.log(n1+n2)
}
// console.log(sum(12,1))

function delayedReturn(fn:()=>void):number{
    return setTimeout(fn,2000)
}

delayedReturn(() => sum(1,2))