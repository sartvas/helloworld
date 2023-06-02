"use strict"
//touchstart — срабатывает при первом касании (аналог mousedown)
//touchmove — срабатывает во время движения пальцем по элементу (аналог mousemove)
//touchend — срабатывает после окончания прикосновения  (аналог mouseup)
//touchcancel — сработает когда событие было прервано

window.addEventListener('DOMContentLoaded', ()=>{
  const logo = document.querySelector('.header__logo');
  logo.addEventListener('touchstart', (e)=>{
      e.preventDefault(); //нужно использовать, чтобы не вызвать цепочку событий 
      console.log('touchstart');
      console.log(e.touches);
      console.log(e.targetTouches);
  })
})


// свойства (е)
// touches — массив, который содержит объекты всех точек касаний на экране "пальцы" (полезно для обработки мультитач);
// targetTouches — массив, который содержит объекты всех точек касаний на вызываемом элементе.