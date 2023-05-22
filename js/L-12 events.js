"use strict"

const btn = document.querySelector('button');

let coutn  = 0;
const callToAction = (e) => {
  e.preventDefault();
  e.target.textContent = "ЖМИ УЖE МЕНЕ!"
  coutn++;
  console.log('ЖМИ')
  if(coutn == 10) {
      btn.removeEventListener('click', callToAction) //в самам колбэеке удаляем обработчик
      console.log('УСЁ')
  }
}

// btn.addEventListener('mouseenter', (e) => {
//     let target = e.target;
//     target.textContent = "ЖМИ УЖЕ!"
// })


btn.addEventListener('click', callToAction, {once: true})


const filmItems = document.querySelectorAll('.promo__interactive-item');

filmItems.forEach(item => {
  item.addEventListener('click', (e) => {
    console.log(e.target.innerText)
  })
})