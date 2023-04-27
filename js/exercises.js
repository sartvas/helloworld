// Место для первой задачи
function firstTask() {
    for (let i = 5; i <= 10; i++){
        console.log(i);
    }    
    
}

// Место для второй задачи
function secondTask() {
    for(let i = 20; i >= 10; i--){
		if (i == 13){
			break;
		}
		console.log(i);
    }
}

// Место для третьей задачи
function thirdTask() {
    for (let i = 1; i <= 10; i++){
    if (i % 2 == 0){
        console.log(i);
    }
} 
    
    
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let z = 2;
while (z <= 16){
    if (z % 2 === 0) {
        z++;
        continue;
    } else {
        console.log(z);
    }
    z++;
}
    
    
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i <= 10; i++){
    arrayOfNumbers.push(i);
    }
    
    
    // Не трогаем
    return arrayOfNumbers;
}

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++){
    result.push(arr[i])
}
    
    
    // Не трогаем
    return result;
}


// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++){
     if(typeof(data[i]) === 'number'){
        data[i] = data[i] * 2
     } else if (typeof(data[i]) === 'string'){
         data[i] += ' - done';
     }
}
    
    // Не трогаем
    return data;
}

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = data.length-1; i>=0; i--){
    result.push(data[i]);
}
    
    // Не трогаем
    return result;
}

console.log("***********".length)


// Место для первой задачи
const userName = 'Антон';
function sayHello(userName) {
    return `Привет, userName`;
}

// Место для второй задачи
const startNumber = 5;
function returnNeighboringNumbers(startNumber) {
    return  [startNumber - 1, startNumber, startNumber + 1];
}


function getMathResult(firstArg, secondArg) {

    let result = "";

    if (typeof(secondArg) != "number"|| secondArg == 0 || secondArg < 0){

        result = firstArg;

    }  else {

        for (let i = 1; i <= secondArg; i++){

            result += `${firstArg*i}---`;
        }

        result = result.slice(0, -3);
    }

    return result;

}

console.log(getMathResult(5,10));