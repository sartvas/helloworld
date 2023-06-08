window.addEventListener('DOMContentLoaded', ()=>{

    //Реализация табов
    const tabheaderAllItems = document.querySelector('.tabheader__items'),
          tabheaderItem = tabheaderAllItems.querySelectorAll('.tabheader__item'),
          tabcontent = document.querySelectorAll('.tabcontent');

    function hideTabcontent(){
        tabcontent.forEach( item => {
            item.classList.add('hide');
            item.classList.remove('show');
        })

        tabheaderItem.forEach( item => {
            item.classList.remove('tabheader__item_active');
        })
    }

    function showTabContent(i = 0){
        tabcontent[i].classList.remove('hide');
        tabcontent[i].classList.add('show');
        tabheaderItem[i].classList.add('tabheader__item_active');
    }

    hideTabcontent();
    showTabContent();
    
    tabheaderAllItems.addEventListener('click', (e)=>{
        e.preventDefault();
        const target = e.target;
        if(target && target.matches('div.tabheader__item')){
            tabheaderItem.forEach((item, i)=>{
                if(target == item){
                    hideTabcontent();
                    showTabContent(i);
                }
            })
        }
    })

    //Реализация таймера

    const myTime = '2023-06-10';

    function getElementOfdate(endtime){
        const t = Date.parse(endtime) - new Date,
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(selector, sometime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector("#days"),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock(){
            const t = getElementOfdate(sometime);
            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;
        }


        if(t.total <= 0){
            clearInterval(timeInterval);
        }
    }



    setClock('.time', myTime);

})