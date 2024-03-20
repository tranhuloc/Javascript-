/*
    Mảng trong Javascript - Array

    1. Tạo mảng
        - Cách tạo
        - Sử dụng cách nào? Tại sao?
        - Kiểm tra data type
    2. Truy xuất mảng
        - Độ dài mảng
        - Lấy phần tử theo index
*/

// Cách tạo
// Cách 1 -> nên dùng
var languages = [
    "Javascript",
    "C++",
    "PHP",
    "Python",
    null,
    undefined,
    function () {},
    {},
    123,
];

// console.log(languages);

// Cách 2
var languages2 = new Array(
    "Javascript",
    "C++",
    "PHP",
    "Python",
    null,
    undefined,
    function () {},
    {},
    123
);

console.log(languages2);

// Kiểm tra data type
console.log(Array.isArray(languages2));
console.log(Array.isArray({}));

// Độ dài mảng
var languages3 = ["Javascript", "C++", "PHP", "Python"];

console.log(languages3.length);

// Lấy phần tử theo index
var languages4 = ["Javascript", "C++", "PHP", "Python"];

console.log(languages4[0]);
console.log(languages4[3]);
