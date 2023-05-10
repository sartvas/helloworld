
  let numbers = [0, 3, 4, 5];


  console.log(numbers.map(item => Math.pow(item, 2)).reduce((a, b) => a + b));