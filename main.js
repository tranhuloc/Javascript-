/*
    LÀM VIỆC VỚI CHUỖI

    Keyword: Javascript string methods

    1. Length
    2. Find index
    3. Cut string
    4. Replace
    5. Convert to upper case
    6. Convert to lower case
    7. Trim
    8. Split
    9. Get a character by index
   
*/

var myString = "Hoc JS co ban va JS nang cao  ";
// 1. Length -> Đo độ dài chuỗi
console.log(myString.length);

// 2. Find index -> Tìm vị trí của 1 ký tự trong 1 chuỗi
console.log(myString.indexOf('JS'));
console.log(myString.indexOf('nang cao', 6)); // -> Tìm kiếm bắt đầu từ vị trí 6
console.log(myString.indexOf('ABC')); // -> không tìm thấy return -1
console.log(myString.lastIndexOf('JS')); // -> Tìm ký tự ở vị trí cuối cùng

// 3. Cut string -> Cắt chuỗi
console.log(myString.slice(4, 6));
console.log(myString.slice(4));
console.log(myString.slice(-3, -1)); // -> Cắt từ phải sang trái

// 4. Replace -> Ghi đè
console.log(myString.replace('JS', 'Javascript'));
console.log(myString.replace(/JS/g, 'Javascript')); // -> Sử dụng biểu thức chính quy để tìm tất cả chuỗi JS

// 5. Convert to upper case -> Chuyển đổi tất cả ký tự chuỗi thành chữ hoa
console.log(myString.toUpperCase());

// 6. Convert to lower case -> Chuyển đổi tất cả ký tự chuỗi thành chữ thường
console.log(myString.toLowerCase());

// 7. Trim -> Loại bỏ ký tự khoảng trắng thừa ở 2 đầu chuỗi
console.log(myString.trim());

// 8. Split -> Tách các phẩn từ chuỗi thành array dừa vào điểm chung
var laguages = 'Javascript, PHP, C++';
var laguages2 = 'Javascript';

console.log(laguages.split(', '));
console.log(laguages2.split(''));

// 9. Get a character by index -> Từ vị trí index lấy ra ký tự
const myString2 = 'Loc Tran';

console.log(myString2.charAt(0));
console.log(myString2.charAt(5));
console.log(myString2.charAt(15));
console.log(myString2[2]);
console.log(myString2[10]);