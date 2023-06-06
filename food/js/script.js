window.addEventListener('DOMContentLoaded', ()=>{

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
})