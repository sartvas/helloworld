"use strict"
//методы строк
const log = "hello beautiful World!";

console.log("indexOf: " + log.indexOf("World"));//определяет индекс

console.log("slice: " + log.slice(0,log.indexOf("World")));  // slice(старт, конец)
console.log("slice: " + log.slice(0,log.length-1)); 
console.log("slice: " + log.slice(log.indexOf("World")));  // slice(старт и до конца)

console.log("substring: " + log.substring(log.indexOf("World")));  // как slice

console.log("charAt: " + log.charAt(0)); // Возвращает символ по индексу 

console.log("endsWith: " + log.endsWith("World!")); // true если данные символы находятся в конце строки; в противном случае, false.
console.log("startsWith: " + log.startsWith("World!")); // Этот метод позволяет определять, начинается ли строка с указанных в скобках символов.

console.log("includes: " + log.includes("beautiful")); // включает ли подстроку true/false

console.log("repeat: " + "abc".repeat(2)); // повторяет нужное количество раз

console.log("toLowerCase: " + 'АЛФАВИТ'.toLowerCase());
console.log("toUpperCase: " + 'алфавит'.toUpperCase());

console.log("trim: " + ' алфавит '.trim()); //возвращает строку с вырезанными пробельными символами с её концов.