"use strict"

//Тернарный оператор и Switch
let num = 70;
let a = (num < 50) ? ("less") : ("more");
console.log(a);

switch (num) {
    case 46:
        console.log("YES 46");
        break;
    case 50:
        console.log("YES 50");
        break;
    case 55:
        console.log("YES 55");
        break;
    default:
        console.log("NOBODY");
        break;
}


