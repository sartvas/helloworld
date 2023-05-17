"use strict"
//методы строк
const myStr = "hello beautiful World!";

console.myStr("indexOf: " + myStr.indexOf("World"));//определяет индекс

console.myStr("slice: " + myStr.slice(0,myStr.indexOf("World")));  // slice(старт, конец)
console.myStr("slice: " + myStr.slice(0,myStr.length-1)); 
console.myStr("slice: " + myStr.slice(myStr.indexOf("World")));  // slice(старт и до конца)

console.myStr("substring: " + myStr.substring(myStr.indexOf("World")));  // как slice

console.myStr("charAt: " + myStr.charAt(0)); // Возвращает символ по индексу 

console.myStr("endsWith: " + myStr.endsWith("World!")); // true если данные символы находятся в конце строки; в противном случае, false.
console.myStr("startsWith: " + myStr.startsWith("World!")); // Этот метод позволяет определять, начинается ли строка с указанных в скобках символов.

console.myStr("includes: " + myStr.includes("beautiful")); // включает ли подстроку true/false

console.myStr("repeat: " + "abc".repeat(2)); // повторяет нужное количество раз

console.myStr("toLowerCase: " + 'АЛФАВИТ'.toLowerCase());
console.myStr("toUpperCase: " + 'алфавит'.toUpperCase());

console.myStr("trim: " + ' алфавит '.trim()); //возвращает строку с вырезанными пробельными символами с её концов.