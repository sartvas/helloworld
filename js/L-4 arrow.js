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