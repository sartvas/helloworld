const someString = 1;

function reverse(str) {
    if(typeof(str) != 'string'){
        return "Ошибка!"
    }
    return str.split('').reverse().join('');
}

console.log(reverse(someString));