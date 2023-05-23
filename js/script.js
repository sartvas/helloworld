/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против"
    ]
};

//1) Удалить все рекламные блоки со страницы (правая часть сайта)

const promoAdv = document.querySelectorAll('.promo__adv img'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      promoInteractiveList = document.querySelector('.promo__interactive-list'),
      btn = document.querySelector("button"),
      myForm = document.forms.addfilm,
      deleteElem = document.querySelectorAll('.delete');

    promoAdv.forEach(item => {item.remove()});

//2) Изменить жанр фильма, поменять "комедия" на "драма"


promoGenre.textContent = 'Драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS


promoBg.style.backgroundImage = 'url("img/bg.jpg")';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 



promoInteractiveList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
    promoInteractiveList.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${item}
            <div class="delete"></div>
        </li>
    `
})


btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(addfilm.nameInput.value)
    if (addfilm.nameInput.value.length > 21){
        addfilm.nameInput.value = addfilm.nameInput.value.slice(0, 21) + '...';
    }
    movieDB.movies.push(addfilm.nameInput.value)
    promoInteractiveList.innerHTML = '';
    movieDB.movies.sort();
    movieDB.movies.forEach((item, i) => {
        promoInteractiveList.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${item}
                <div class="delete"></div>
            </li>
        `
    })
    if(myForm.check.checked){
        console.log("Добавляем любимый фильм");
    }

})

const filmItems = document.querySelectorAll('.promo__interactive-item');

console.log(deleteElem)

deleteElem.forEach(item => {
  item.addEventListener('click', (e) => {
    console.log(e.target);
  })
})





