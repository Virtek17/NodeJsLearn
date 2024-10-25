const fs = require('fs');

//read json file
const data = fs.readFileSync('./d04/j_1.json', {encoding: 'utf8', flag: 'r'}) // получаем строку
// console.log(data) 

let dataObject = JSON.parse(data); // приводим строку к объекту 
console.log(dataObject)