/*
    Câu lệnh rẽ nhánh - If else
*/

var date = 2;

if (date === 2) {
    console.log('Hom nay la thu 2');
} else if (date === 3) {
    console.log('Hom nay la thu 3');
} else if (date === 4) {
    console.log('Hom nay la thu 4');
} else {
    console.log('Khong phai ngay trong tuan');
}


/*
    Khi a chia hết cho 3 thì return về 1
    Khi a chia hết cho 5 thì return về 2
    Khi a chia hết cho 15 thì return về 3
*/
function run(a) {
    if (a % 3 == 0 && a % 5 !== 0) {
        return 1;
    } else if (a % 5 == 0 && a % 15 !== 0) {
        return 2;
    } else if (a % 15 == 0) {
        return 3;
    }
}


// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3