/*
Tham số hàm
1. Tham số?
    - Định nghĩa
    - Kiểu dữ liệu
    - Tính private
    - 1 tham số
    - Nhiều tham số

2. Truyền tham số
    - 1 tham số
    - Nhiều tham số

3. Arguments?
    - Đối tượng arguments
    - Giới thiệu vòng for
*/

// function writeLog(message, message2) {
//     console.log(message);
//     console.log(message2);
// }

// writeLog('TEST', 'TEST 2');

// Đối tượng arguments
// function writeLog() {
//     console.log(arguments);
// }

// writeLog('TEST 1', 'TEST 2');

// Giới thiệu vòng for
function writeLog() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString);
}

writeLog("TEST 1", "TEST 2", "TEST 3");
