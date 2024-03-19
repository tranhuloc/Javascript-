/*
    Một số điều cần biết về function

    1. Khi function đặt trùng tên? -> Function định nghĩa sau sẽ ghi đè function định nghĩa trước
    2. Khai báo biến trong hàm? -> Một biến được định nghĩa trong function thì phạm vi sử dụng chỉ nằm trong function đó
    3. Định nghĩa hàm trong hàm -> Giống như biến, phạm vi sử dụng hàm trong hàm chỉ trong phạm vi hàm được định nghĩa
*/

//1. Khi function đặt trùng tên?
// function showMessage() {
//     console.log("Message 1");
// }

// function showMessage() {
//     console.log("Message 2");
// }

// showMessage(); //-> Message 2


//2. Khai báo biến trong hàm?
// function showMessage() {
//     var fullName = 'Loc Tran';

//     console.log(fullName);
// }

// showMessage();

//3. Định nghĩa hàm trong hàm
function showMessage() {
    function showMessage2() {
        console.log('Message 2');
    }

    showMessage2();
}

showMessage();
