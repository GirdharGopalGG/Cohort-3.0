"use strict";
let user1 = {
    name: 'gg',
    age: 65,
    address: {
        city: 'ggpur',
        country: 'sf'
    }
};
let user2 = {
    name: 'gg2',
    age: 12
};
function isLegal(user) {
    if (user.age < 18)
        return false;
    return true;
}
console.log(isLegal(user1));
console.log(isLegal(user2));
let p1 = {
    name: 'gg',
    age: 33,
    greet() {
        return 'hi';
    },
};
console.log(p1.greet());
class Managers {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
