//вывести уникальные дубли элементов
const numbers = [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"];
const duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
console.log(Array.from(new Set(duplicates)));