"use strict"

function pows(x, n){
  let result = 1;
  for(let i = 0; i < n; i++){
    result *= x;
  }

  return result;
}


function pows(x, n){ // n глубина рекурсии
  if (n === 1) { // база рекурсии
    return x;
  } else {
    return x * pows(x, n - 1); // pows(x, n - 1) шаг рекурсии
  }
} 

console.log(pows(2,2))


let students  = {
  js: [
    {
      name: "Ivan",
      progress: 80
    },
    {
      name: "Lena",
      progress: 100
    }
  ],
  html: {
    basic:[
      {
        name: "Ira",
        progress: 60
      },
      {
        name: "Kolya",
        progress: 30
      }
    ],
    pro:[
      {
        name: "Sara",
        progress: 67
      }
    ]
  }
}