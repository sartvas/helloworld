"use strict"

function congartultions(lang){
    console.log(`${lang} is very good choise!`) //колбэк
}

function whatIsYouLanguage(lang, congartultions){ //функция, вызывающая колбэк
    console.log(`My language is ${lang}`);
    congartultions(lang);
}

whatIsYouLanguage('Java', congartultions);
