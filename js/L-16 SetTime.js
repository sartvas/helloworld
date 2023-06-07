"use strict"

let i = 0;

const myTimeOut = setTimeout(() =>{ //помещаем в переменную для гибкого управления
    console.log('Time');
}, 2000
);

function blogger(){
    console.log('blogger');
}

function logger(){
    if (i === 3){
        clearInterval(mySetInterval) //прервать интервал
    }
    console.log(`log ${i}`);
    i++;
}

const myTimeOut2 = setTimeout(blogger, 500); //таймаут с заданной заранее функцией

//clearTimeout(myTimeOut2) - сбросим таймаут, передавая в качестве аргумента переменную

const mySetInterval = setInterval(logger, 500);

//рекурсивный setTimeout. Ждёт выполнения
let j = 0;
let recurTimeOut = setTimeout(function log(){
    console.log(j);
    recurTimeOut = setTimeout(log, 500);
    j++;
    if (j === 5){
        clearTimeout(recurTimeOut);
    }
}, 2000);

const headerLogo = document.querySelector('.header__logo_img');

let logoMargin = 0;
headerLogo.addEventListener('click', ()=>{
    let moveLogo = setTimeout(function logo(){
        headerLogo.setAttribute('style', `margin-left:${logoMargin}px`);
        logoMargin++;
        moveLogo = setTimeout(logo, 100);
        if(logoMargin === 100){
            clearTimeout(moveLogo);
        }
    },);
});