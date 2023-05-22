"use strict"

//шаблон

function someFunction(arg1, foo2){
    //1.
    arg1
    //2.
    foo2()
}

function congartultions(lang){
    console.log(`${lang} is very good choise!`) //колбэк
}

function whatIsYouLanguage(lang, congartultions){ //функция, вызывающая колбэк
    console.log(`My language is ${lang}`);
    congartultions(lang);
}

whatIsYouLanguage('Java', congartultions);
