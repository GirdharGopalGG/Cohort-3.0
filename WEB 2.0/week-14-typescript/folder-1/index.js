"use strict";
function greet(name) {
    console.log('hello ' + name);
}
greet('ram');
function add(a, b) {
    return a + b;
}
console.log(add(1, 3));
function isLegal(age) {
    if (age < 18)
        return false;
    return true;
}
console.log(isLegal(20));
function delayedCall(fn) {
    setTimeout(fn, 3000);
}
function log() {
    console.log('hi ter');
}
delayedCall(log);
function greetObject(user) {
    console.log(`hello ${user.name} your age is ${user.age}`);
}
const obj = { name: 'gg', age: 34 };
greetObject(obj);
let x = 1;
let y = 'gg';
console.log(x + y);
