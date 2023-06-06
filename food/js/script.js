window.addEventListener('DOMContentLoaded', ()=>{

    const tabheaderAllItems = document.querySelector('.tabheader__items'),
          tabheaderItem = tabheaderAllItems.querySelectorAll('.tabheader__item'),
          tabcontent = document.querySelectorAll('.tabcontent');

    function hideTabcontent(){
        tabcontent.forEach( item => {
            item.style.display = 'none';
        })

        tabheaderItem.forEach( item => {
            item.classList.remove('tabheader__item_active');
        })
    }

    function showTabContent(i){
        tabcontent[i].style.display = 'block';
        tabheaderItem[i].classList.add('tabheader__item_active');
    }

    hideTabcontent();
    showTabContent(0);
    
})