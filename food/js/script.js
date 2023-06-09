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

    const myTime = '2023-12-30';

    function getElementOfdate(endtime){
        let days, seconds, minutes, hours
        const t = Date.parse(endtime) - new Date();
        //обработка отрицательной даты
        if(t <= 0){ 
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor( (t/(1000*60*60*24)) ),
            hours = Math.floor( (t/(1000*60*60) % 24) )
            minutes = Math.floor( (t/1000/60) % 60 ),
            seconds = Math.floor( (t/1000) % 60 );
        }
    
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

        function zeroNumber(num){
            if(num >=0 && num < 10){
                return '0' + num;
            } else {
                return num;
            }
        }

        function updateClock(){
            const t = getElementOfdate(sometime);
            days.innerHTML = zeroNumber(t.days);
            hours.innerHTML = zeroNumber(t.hours);
            minutes.innerHTML = zeroNumber(t.minutes);
            seconds.innerHTML = zeroNumber(t.seconds);


            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }

    }

    setClock('.timer', myTime);

})