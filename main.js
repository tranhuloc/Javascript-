/*
    Kiểu số (Number) trong Javascript

    1. Tạo giá trị Number
        - Các cách tạo
        - Dùng cách nào? Tại sao?
        - Kiểm tra data type

    2. Làm việc với Number
        - To string
        - To Fixed
*/

// Các cách tạo -> 2 cách tạo
// Cách 1 -> Nên dùng vì ngắn gọn, nhanh
var age = 18;
var PI = 3.14;

// Cách 2 -> Không nên vì rườm rà, tạo một đối tượng, kiểu dữ liệu không mong muốn
var otherNumber = new Number(9);

console.log(typeof age); //number
console.log(typeof otherNumber); //object

// Kiểm tra data type
var result = 20 / "ABC";

console.log(isNaN(result));

// To string
var myString = age.toString();
console.log(typeof myString);

// To Fixed
console.log(PI.toFixed());
