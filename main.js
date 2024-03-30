/*
   Đối tượng Date

   Search -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

var date = Date();

console.log(typeof date); //string

var date = new Date();

console.log(date.getFullYear()); //2024

var year = date.getFullYear();
var month = date.getMonth() + 1; // 0 - 11 nếu không có +1
var day = date.getDate();

console.log(year); // 2024
console.log(month); // 3
console.log(day); // 30
console.log(`${day}/${month}/${year}`); // 30/3/2024