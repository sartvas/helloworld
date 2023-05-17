const allStudent = ["Ann", "Piter", "John", "Mikle", "Vasyan"];
const studentsWhoCan = ["John", "Ann"];

console.log(allStudent.filter(item => !studentsWhoCan.includes(item)));