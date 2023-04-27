"use strict"
//arrow function

function showFirstMessage(){
    console.log("Hello!")
}

showFirstMessage();

let userName = "Ivan";

//functionDeclaration
function greeetingUser(userName){
    console.log(`Welcome to our galley, ${userName}!`);
}

greeetingUser(userName);

//functionExpression
const functionExpressionExample = function(){
    let a = "aaaaaaaaa"
    return a;
};

console.log(functionExpressionExample());


//arrowFunction

const arrowFunctionExample = (a, b) => a + b; 
console.log(arrowFunctionExample(2,5))

//bestPractice

function testReturn(){
    for (let index = 0; index < 3; index++) {
        console.log(index);
        if(index == 2) return 
    }
    console.log("Finish"); //не сработает, т.к. есть return и функция завершится
}

testReturn();


//Функция всегда что-то возвращает, если нет return, то он всё равно есть :) и возвращает undefined

function doNothing(){};
console.log(doNothing() === undefined);
console.error("error");
console.profile();