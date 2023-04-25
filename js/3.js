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

// let result = "";

// for (let i = 1; i <= 9; i++){
//     for (let j = 1; j<= 9; j++){
//         result += `${i} * ${j} = ${i*j}   `
//     }

//     result += '\n';
// }

// console.log(result)



// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++){
//     result.push(arr[i])
// }

// console.log(result);


// for (let i = 0; i < data.length; i++){
//     if(typeof(data[i]) === 'number'){
//         data.push(data[i]*2);
//     } else if (typeof(data[i]) === 'string'){
//         data.push(data[i] + ' - done');
//     }
// }

// console.log(data);

const data = [5, 10, 'Shopping', 20, 'Homework'];

data.forEach((item)=>{
    if(typeof(item) === 'number'){
        console.log(item * 2);
    } else if (typeof(item) === 'string'){
        console.log(item + ' - done');
    }
})

console.log(data);