/*
    Chuỗi trong JS

    1. Tạo chuỗi
        - Các cách tạo chuỗi
        - Nên dùng cách nào? Lý do?
        - Kiểm tra data type
    2. Một số case sử dụng backslash (\)
    3. Xem độ dài chuỗi
    4. Chú ý độ dài khi viết code 
    5. Template string ES6
*/

// Các cách tạo chuỗi
// Cách 1 -> Nên dùng cách 1, ngắn gọn, nhanh, 
var fullName = "Loc Tran";

// Cách 2 -> Tạo ra kiểu dữ liệu không như mong muốn
var fullName2 = new String("Loc Tran"); 

console.log(typeof fullName2); // -> object != string

// 2. Một số case sử dụng backslash -> backlash in Javascript
var fullName3 = 'Tran Huu \"Loc\'';

console.log(fullName3);

var fullName4 = "Day la dau \\";

console.log(fullName4);

// 3. Xem độ dài chuỗi
var fullName5 = "Loc Tran";

console.log(fullName5.length);

// 4. Chú ý độ dài khi viết code -> tối đa 80 ký tự trên 1 dòng
var fullName6 = "Một số case sử dụng backslash"
+ " 1. Một số case sử dụng backslash"
+ " 2. Một số case sử dụng backslash"
+ " 3. Một số case sử dụng backslash"
;

console.log(fullName6);

// 5. Template string ES6
var firstName = 'Loc';
var lastName = 'Tran';

console.log(`Toi la: ${firstName} ${lastName}`);