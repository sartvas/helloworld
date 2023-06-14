"use strict"

function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.sayHi = function(){
        console.log(`${this.name} said: "Hello, mf!"`)
    }
}


User.prototype.jump = function(){
    console.log(`${this.name} jumping`);
}


const ivan = new User('Ivan', 1);
const irina = new User('Irina', 34);

console.log(ivan, irina.id);
console.log(irina.sayHi());
console.log(ivan.jump());