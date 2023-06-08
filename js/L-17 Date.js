"use strict"

const myDate = new Date();
const myDateWhithParam = new Date('2023-05-08');
console.log(myDate);

//get - получать, set - устанновить
console.log(`getFullYear: ${myDate.getFullYear()}`);
console.log(`getMonth: ${myDate.getMonth()+1}`); //c 0
console.log(`getDay: ${myDate.getDay()}`); //c воскресенья
console.log(`getHours: ${myDate.getHours()}`); //
console.log(`setHours: ${myDate.setHours(1)}`); // затем вызываем myDate
console.log(myDate);

let start = new Date();
let i = 0;
while(i < 10000000){
    let a = 0;
    a += i;
    i++;
}
let end = new Date();
console.log(`Скрипт отработал за ${end - start} мс`)