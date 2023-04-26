let userFilm = prompt('Один из последних просмотренных фильмов?', '');
while(userFilm == null||userFilm == ''||userFilm == 'undefined'||userFilm.length > 50||userFilm == ' '){
    alert("Неверный ввод, повторите снова");
    userFilm = prompt('Один из последних просмотренных фильмов?', '');
}