/*
    Toán tử 3 ngôi - Ternary operator
*/

var course = {
    name: "Javascript",
    coin: 0,
};

var result = course.coin > 0 ? `${course.coin} Coin` : "Mien phi";

console.log(result);

/*
    Tạo hàm getCanVoteMessage, hàm này có 1 tham số là age. 
    Trong trường hợp từ 18 tuổi trở lên 
    hàm sẽ trả về Bạn có thể bỏ phiếu, 
    ngược lại hàm trả về Bạn chưa được bỏ phiếu.
*/

function getCanVoteMessage(age) {
    return age >= 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
}



// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'