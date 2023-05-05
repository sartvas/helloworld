"use strict"

const myArr = [1,5,7,91,34];

console.log("***Перебор циклом FOR***")
let forResult = '';
for(let i = 0; i < myArr.length; i++){
    forResult += `${myArr[i]} `
}
console.log(forResult);

console.log("***Перебор циклом FOR IN***")
let forInResult = '';

for (let key in myArr) {
    forInResult += `${myArr[key]} `
}
console.log(forInResult);

console.log("***Перебор циклом FOR OF***")
let forOfResult = '';

for (let value of myArr) {
    forOfResult += `${value} `
}
console.log(forOfResult);

console.log("***Перебор циклом FOR Each***")

const myArr2 = [2,77];

myArr2.forEach( (item, i, arr) => { 
     console.log(`Элемент с индексом ${i} и значением ${item} в массиве ${arr}`);
})

console.log("***splice***")

let whatthef = ['what', 'the', 'f'];

whatthef.splice(1, 1) 

console.log(`Начиная с 1-го элемента удаляем 1: ${whatthef}`); 

whatthef.splice(2, 0, "!");

console.log(`Начиная со 2-го элемнта, удаляем 0, добавляем в массив "!": ${whatthef}`); 

console.log("***spice***")
//Можно вызвать slice без аргументов: arr.slice() создаёт копию arr. Это часто используют, чтобы создать копию массива для дальнейших преобразований, которые не должны менять исходный массив.
console.log(whatthef.slice(0, 1)); 

