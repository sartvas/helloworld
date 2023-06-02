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

document.addEventListener('DOMContentLoaded', ()=>{
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
          addForm = document.querySelector('.add'),
          inputForm = addForm.querySelector('.adding__input'),
          addCheckBox = addForm.querySelector('[type=checkbox]'),
          myForm = document.forms.addfilm;
    
    promoAdv.forEach(item => {item.remove()});

    promoGenre.textContent = 'Драма';  //2) Изменить жанр фильма, поменять "комедия" на "драма"
    
    promoBg.style.backgroundImage = 'url("img/bg.jpg")';   // 3) Изменить задний фон постера с фильмом на изображение "bg.jpg"
    
    makeNewList(movieDB.movies, promoInteractiveList);
    
    addForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        if(inputForm.value){

            if (inputForm.value.length > 20){
                inputForm.value = inputForm.value.slice(0, 21) + '...';
            }
            movieDB.movies.push(inputForm.value);
            makeNewList(movieDB.movies, promoInteractiveList);
        }

        e.target.reset();

        if(addCheckBox.checked){
            console.log(`Добавляем любимый фильм ${inputForm.value}`)
        }

    })


    function makeNewList(bd, list){
        list.innerHTML = '';
        bd.sort();
        bd.forEach((item, i) => {
            list.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${item}
                <div class="delete"></div>
            </li>
        `   
        })

        document.querySelectorAll('.delete').forEach((item, i)=>{
            item.addEventListener('click', () =>{
                item.parentElement.remove();
                movieDB.movies.splice(i, 1);
                makeNewList(movieDB.movies, promoInteractiveList); //рекурсия
            })

        })

    }
   
})






