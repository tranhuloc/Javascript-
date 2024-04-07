/*
    Array method:
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
*/

var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 100,
    },
    {
        id: 2,
        name: "HTML, CSS",
        coin: 0,
    },
    {
        id: 3,
        name: "Ruby",
        coin: 0,
    },
    {
        id: 4,
        name: "PHP",
        coin: 15,
    },
    {
        id: 5,
        name: "ReactJS",
        coin: 12,
    },
    {
        id: 6,
        name: "PHP",
        coin: 50,
    },
];

// reduce() -> sử dụng khi muốn nhận về 1 giá trị duy nhất 
// sau khi tính toán trên những phần tử của 1 array
var totalCoin = 0;

// Không dùng reduce()
for (var course of courses) {
    totalCoin += course.coin;
}

console.log(totalCoin);


// Dùng reduce()
var i = 0;

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++;

    var total = accumulator + currentValue.coin;

    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ: ': accumulator,
        'Giá khóa học: ': currentValue.coin,
        'Tích trữ được: ': total
    });
    console.log(currentValue);

    // return accumulator + currentValue.coin;
    return total;
}

var totalCoin2 = courses.reduce(coinHandler, 0);

console.log(totalCoin2);



/*
    Tại SEA GAMES 31 vừa qua, 
    đoàn thể thao Việt Nam đã đứng đầu bảng tổng sắp huy chương. 
    Hãy tạo hàm getTotalGold có 1 tham số là mảng. 
    Tính tổng số huy chương vàng 
    mà đoàn thể thao Việt Nam đạt được 
    trong kỳ SEA Game lần này.
*/


var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function getTotalGold(sports) {
    return sports.reduce(function(sum, arr) {
        return sum + arr.gold;
    }, 0)
};

// Expected results:
console.log(getTotalGold(sports)) // Output: 23






