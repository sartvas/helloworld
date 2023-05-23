const numbers = [1, 2, 4];

const duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));

console.log(Array.from(new Set(duplicates)));

