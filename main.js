/*
    Các loại function

    1. Declaration function
    2. Expression function
    3. Arrow function
*/

//1. Declaration function -> Có thể được gọi trước khi được định nghĩa
showMessage();

function showMessage() {
    console.log('Declaration function');
}


//2. Expression function -> Không thể gọi trước khi được định nghĩa
var showMessage2 = function testName() {
    console.log('Expression function');
}

showMessage2();

setTimeout(function testName() {

});

var myObject = {
    myFunction: function testName() {

    }
}