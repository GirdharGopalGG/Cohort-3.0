"use strict";
function greet(name) {
    console.log(`hello ${name}`);
}
greet('gg');
function sum(n1, n2) {
    console.log(n1 + n2);
}
// console.log(sum(12,1))
function delayedReturn(fn) {
    return setTimeout(fn, 2000);
}
delayedReturn(() => sum(1, 2));
