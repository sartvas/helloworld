let arr = ["Keep", "Remove", "Keep", "Remove", "Keep"];


const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);

console.log(removeEveryOther());