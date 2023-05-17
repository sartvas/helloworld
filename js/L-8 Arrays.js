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

console.log("***split join***")

const allUsers = "Vasya, Petya, Irina, Mike, Kolya";
console.log(allUsers.split(', ').filter(item => item != 'Irina').join(', '));

console.log("***splice***")

let whatthef = ['what', 'the', 'f'];

whatthef.splice(1, 1) 

console.log(`Начиная с 1-го элемента удаляем 1: ${whatthef}`); 

whatthef.splice(2, 0, "!");

console.log(`Начиная со 2-го элемнта, удаляем 0, добавляем в массив "!": ${whatthef}`); 

console.log("***slice***")
//Можно вызвать slice без аргументов: arr.slice() создаёт копию arr. Это часто используют, чтобы создать копию массива для дальнейших преобразований, которые не должны менять исходный массив.
console.log(whatthef.slice(0, 1)); 

console.log("***concat***")

let concatArr1 = [1,2];
let concatArr2 = [3,4];

console.log(concatArr1.concat(concatArr2));


console.log("***find***")

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
const newUser1 = users.find(item => item.id == 1);
const newUser2 = users.find(item => item.name == 'Петя');

console.log(newUser1.name, newUser2)

console.log("***filter***")

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Выведем только чётные числа: ${nums.filter(item => item % 2 == 0)}`);
const allStudent = ["Ann", "Piter", "John", "Mikle", "Vasyan"];
const studentsWhoCan = ["John", "Ann"];
console.log(allStudent.filter(item => !studentsWhoCan.includes(item))); // результат всех студентов 1-го массива, исключая 2-й.

console.log("***map***")

const mapNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let summ = 0;

console.log(mapNums.map(item => item * 2));
console.log(mapNums.filter(item => item % 2 == 0).map(item => item * 0.2));

console.log("***sort***")

const sortNumsArray = [33,56,7,8,1,2,54];
console.log(sortNumsArray.sort((a, b) =>  a - b));



