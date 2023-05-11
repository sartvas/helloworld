"use strict"
const personalMovieDB = {
    count : 0,
    getMoviesCount : function (){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        while (personalMovieDB.count  == '' || personalMovieDB.count  == 'undefined'|| personalMovieDB.count == null){
            alert("Неверный ввод, повторите снова");
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    dtectPersonalLevel: function(){
        if (personalMovieDB.count < 10){
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Ошибка");
        }
    },
    movies : {},
    actors : {},
    genres : [],
    writeYourGenres : function s(){
        for(let i = 0; i < 3; i++){
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1} это: `, '');
        }

        let count = 1;
        personalMovieDB.genres.forEach(item => {
            console.log(`Ваш любимый жанр #${count} - это ${item}`);
            count++;
        })
    
        console.log(personalMovieDB.genres);
    },
    privat : false,
    rememberMyFilms : function() {
        for (let i = 0; i < 2; i++){
            userFilm = prompt('Один из последних просмотренных фильмов?', '').trim();
            while(userFilm == null||userFilm == ''||userFilm == 'undefined'||userFilm.length > 50){
                alert("Неверный ввод, повторите снова");
                userFilm = prompt('Один из последних просмотренных фильмов?', '');
            }
            ratingOfFilm = +prompt('На сколько оцените его?', '');
            personalMovieDB.movies[userFilm] = ratingOfFilm;
        }
    },

    showMyDB : function(db){
        if(db){
            console.log(personalMovieDB);
        }
    
    },


}

let userFilm, ratingOfFilm;
personalMovieDB.getMoviesCount();
personalMovieDB.dtectPersonalLevel();
personalMovieDB.rememberMyFilms(); 
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);

