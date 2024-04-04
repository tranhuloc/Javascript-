/*
    Do...While loop -> từ lần lặp thứ 2 mới kiểm tra điều kiện
*/

var i = 0;

do {
    i++;

    console.log(i); // 1 -> 10

} while (i < 10);



var isSuccess = false;
var a = 0;

do {
    a++;
    console.log('Nạp thẻ lần ' + a);

    // Thành công
    if (true) {
        isSuccess = true;
    }

} while (!isSuccess && a < 3)