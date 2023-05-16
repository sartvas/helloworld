"use strict"

let number = 5;


function learnClous(){
    console.log(number)
}

number = 6;
learnClous();

number = 7;
 function createCounter() {
   let counter = 0
   const myFunction = function() {
     counter = counter + 1
     return counter
   }
   return myFunction
 }
 const increment = createCounter()
    const c1 = increment()
    const c2 = increment()
    const c3 = increment()
    console.log('example increment', c1, c2, c3)


    const a = 1;
    const b = '1'
    console.log([] + {})
    console.log({} + {})
    console.log('wat'-1)

    console.log( "a" < "а"); 