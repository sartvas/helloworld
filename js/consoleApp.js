"use strict"

let numberOfFims = +prompt("Сколько фильмов вы уже посмотрели?", '');

while (numberOfFims == '' || numberOfFims == 'undefined'|| numberOfFims == null){
    alert("Неверный ввод, повторите снова");
    numberOfFims = +prompt("Сколько фильмов вы уже посмотрели?", '');
}

if (numberOfFims < 10){
    alert("Просмотрено довольно мало фильмов");
} else if (numberOfFims >= 10 && numberOfFims < 30) {
    alert("Вы классический зритель");
} else if (numberOfFims >= 30) {
    alert("Вы киноман");
} else {
    alert("Ошибка");
}

const personalMovieDB = {
    count : numberOfFims,
    movies : {},
    actors : {},
    genres : [],
    privat : false,


}

let userFilm, ratingOfFilm;

for (let i = 0; i < 2; i++){
    userFilm = prompt('Один из последних просмотренных фильмов?', '');
    while(userFilm == null||userFilm == ''||userFilm == 'undefined'||userFilm.length > 50||userFilm == ' '){
        alert("Неверный ввод, повторите снова");
        userFilm = prompt('Один из последних просмотренных фильмов?', '');
    }
    ratingOfFilm = +prompt('На сколько оцените его?', '');
    personalMovieDB.movies[userFilm] = ratingOfFilm;
}

console.log(personalMovieDB.movies);