"use strict"

//Вложенные циклы

// for(let i = 0; i < 2; i++){
//     console.log(`Внешний цикл ${i}`);
//     for(let j = 0; j < 2; j++){
//         console.log(`Второй цикл ${j}`);
//         for(let k = 0; k < 2; k++){
//             console.log(`Последний цикл ${k}`);
//         }
//     }
// }

let result = "";

for (let i = 1; i <= 9; i++){
    for (let j = 1; j<= 9; j++){
        result += `${i} * ${j} = ${i*j}   `
    }

    result += '\n';
}

console.log(result)