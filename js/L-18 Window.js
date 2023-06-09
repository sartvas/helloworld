"use strict"

// 3 main objects: document, window, screen

const promoMenu = document.querySelector('.promo__menu'),
      promo = document.querySelector('.promo'),
      headerLogo = document.querySelector('.header__logo');

const widthP = promoMenu.clientWidth;
const highP = promoMenu.clientHeight;

console.log(widthP, highP)

//если есть скролл
const promoWidthScroll = promoMenu.scrollWidth;
const promoHighScroll = promoMenu.scrollHeight;
console.log(promo.scrollWidth)

//Координаты стили
console.log('getBoundingClientRect')
console.log(headerLogo.getBoundingClientRect());


//Computed стили. Только чтение, проверка на наличие, к примеру display
let style = window.getComputedStyle(promoMenu);
console.log('CSSStyleDeclaration ')
console.log(style.display);


//доступ через document
console.log(document.documentElement.clientWidth);

document.documentElement.scrollTop = 0 //перемещщает наверх