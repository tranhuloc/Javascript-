/*
    includes method:
*/

// String
var title = 'Responsive web design';

console.log(title.includes('dash')); // false
console.log(title.includes('web design')); // true
console.log(title.includes('Responsive', 0)); // true
console.log(title.includes('Responsive', 2)); // false -> bắt đầu tìm kiếm từ vị trí số 2


// Array
var courses = ['Javascript', 'PHP', 'C++'];

console.log(courses.includes('Javascript')); // true
console.log(courses.includes('Java')); // false
console.log(courses.includes('Javascript', 0)); // true
console.log(courses.includes('Javascript', 1)); // false



// Bài tập
var cars = ['Rolls-Royce', 'Mercedes', 'Lexus', 'BMW', 'Audi'];

function checkCar(cars) {
   return cars.includes('Mercedes', 2);
}

console.log(checkCar(cars)); // Output: false