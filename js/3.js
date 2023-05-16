"use strict"

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    fDish.slice(0,-1) + sDish.slice(0,-1) < average.slice(0,-1) ? 'Цена ниже средней' : 'Цена выше средней';
}

console.log(restorantData.menu[0].price.slice(0,-1) + restorantData.menu[1].price.slice(0,-1), restorantData.averageLunchPrice.slice(0,-1));
console.log(isAverageLunchPriceTrue(restorantData.menu[0].price, restorantData.menu[1].price, restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData);