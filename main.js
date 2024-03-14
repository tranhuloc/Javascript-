/*
1. Dữ liệu nguyên thủy - Primitive Data
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol

2. Dữ liệu phức tạp - Complex Data
    - Function
    - Object
*/

// Number type
var a = 1;
var b = 2;
var c = 1.5;

// console.log(typeof a);

// String type
var fullName = "Loc 'Tran";

// console.log(typeof fullName);

// Boolean type
var isSuccess = true;

// console.log(typeof isSuccess);

// Undefined type
var age;

// console.log(typeof age);

// Null type
var isNull = null; //nothing

// console.log(typeof isNull);

// Symbol type
var id = Symbol("id"); //unique
var id2 = Symbol("id"); //unique

// console.log(typeof id);

// Function
var myFunction = function () {
    alert("Hi, Xin chao cac ban!");
};

// console.log(typeof myFunction);

// myFunction();

// Object types
var myObject = {
    name: "Loc Tran",
    age: 18,
    adress: "Can Tho",
    myFunction: function () {},
};

// console.log(typeof myObject);

var myArray = ["Javascript", "PHP", "C++", "Python", "C#"];

// console.log(typeof myArray);
