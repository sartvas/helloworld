
let numberOfFims = +prompt("Сколько фильмов вы уже посмотрели?", '');

while (numberOfFims == '' || numberOfFims == 'undefined'|| numberOfFims == null){
    alert("Неверный ввод, повторите снова");
    numberOfFims = +prompt("Сколько фильмов вы уже посмотрели?", '');
}

console.log(numberOfFims);
