"use strict"

let numberOfFims;

function start(){
    numberOfFims = +prompt("Сколько фильмов вы уже посмотрели?", '');
    while (numberOfFims == '' || numberOfFims == 'undefined'|| numberOfFims == null){
        alert("Неверный ввод, повторите снова");
        numberOfFims = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

//start();

function dtectPersonalLevel(){
    if (numberOfFims < 10){
        alert("Просмотрено довольно мало фильмов");
    } else if (numberOfFims >= 10 && numberOfFims < 30) {
        alert("Вы классический зритель");
    } else if (numberOfFims >= 30) {
        alert("Вы киноман");
    } else {
        alert("Ошибка");
    }
}

//dtectPersonalLevel();

const personalMovieDB = {
    count : numberOfFims,
    movies : {},
    actors : {},
    genres : [],
    privat : false,


}

function showMyDB(db){
    if(db){
        console.log(personalMovieDB)
    }

}


let userFilm, ratingOfFilm;

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        userFilm = prompt('Один из последних просмотренных фильмов?', '').trim();
        while(userFilm == null||userFilm == ''||userFilm == 'undefined'||userFilm.length > 50){
            alert("Неверный ввод, повторите снова");
            userFilm = prompt('Один из последних просмотренных фильмов?', '');
        }
        ratingOfFilm = +prompt('На сколько оцените его?', '');
        personalMovieDB.movies[userFilm] = ratingOfFilm;
    }
}

rememberMyFilms();



function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1} это: `, '');
    }

    console.log(personalMovieDB.genres);
}

//writeYourGenres();

showMyDB(personalMovieDB.privat);