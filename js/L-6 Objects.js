"use strict"

const myNeighbor = {
    name: "Ivan",
    age: 32,
    profession: "unemployed",
    kids: {
        sex: 'man',
        name: 'Gena',
        age: 2
    },
    isMarried: true,
    atNight: function (){
        console.log("Run atNight method 'Yell out the window'");
    }
};

console.log("***Перебор всех элементов массива через FOR IN***")

for (let key in myNeighbor) {
    if (typeof(myNeighbor[key]) === 'object') {
        for(let i in myNeighbor[key]){
            console.log(`In key "${i}" value is ${myNeighbor[key][i]}`);
        }
    } else {
        console.log(`In key "${key}" value is ${myNeighbor[key]}`);
    }
    
} 



console.log(`Число элементов объекта: ${Object.keys(myNeighbor).length}\n`); 


myNeighbor.atNight();

const {sex, name, age} = myNeighbor.kids;

console.log(`Деструктуризация объекта myNeighbor.kids: ${sex, name, age}\n`)

console.log("***создание объекта при помощи конструктора***")
function newCar(model, color, engine){
    this.model = model;
    this.color = color;
    this.engine = engine;
};
const myCar = new newCar("Mercedes", 'green', 2.8);
for (let key in myCar){
    console.log(`In my car ${key} is ${myCar[key]}`);
}