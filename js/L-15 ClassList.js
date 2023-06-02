"use strict"

const menuItem = document.querySelectorAll('.promo__menu-item'),
      promoMenu = document.querySelector('.promo__menu');


console.log(menuItem[0].classList);
console.log(menuItem[0].classList.length);
console.log(menuItem[0].classList.item(0)); //выбор опредленного класса по индексу
console.log(menuItem[0].classList.contains('promo__menu-item_active')); //проверка на класс

menuItem[0].classList.remove('some_class'); //удаление класса
menuItem[1].classList.add('some_class'); //добавление класса
menuItem[2].classList.toggle('some_class'); //добавление/удаление класса


function removeActive(parent, child, activeClass){
    parent.querySelectorAll(child).forEach(element => {
        element.classList.remove(activeClass)
    });
}

promoMenu.addEventListener('click', (e) =>{
    if (e.target && e.target.matches('a.promo__menu-item')){
        e.preventDefault();
        removeActive(promoMenu, '.promo__menu-item', 'promo__menu-item_active');
        e.target.classList.add('promo__menu-item_active');
    }
})
