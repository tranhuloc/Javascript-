/*
    Math object
 
    - Math.PI
    - Math.round()
    - Math.abs()
    - Math.ceil()
    - Math.floor()
    - Math.random()
    - Math.min()
    - Math.max()
*/

console.log(Math.PI); // 3.141592653589793
console.log(Math.round(1.5)); // 2
console.log(Math.abs(-5.3));
console.log(Math.ceil(4.00000000001)); // 5 -> LÀm tròn trên
console.log(Math.floor(5.999999999)); // 5 -> LÀm tròn dưới 
console.log(Math.random()); // Return 1 số thập phân ngẫu nhiên >1
console.log(Math.floor(Math.random() * 10)); // Return 1 số ngẫu nhiên 1 - 10
var random = Math.floor(Math.random() * 5);

var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];

console.log(bonus[random]);

console.log(Math.min(-110, 1, 0, 23, 99)); // -110
console.log(Math.max(-110, 1, 0, 23, 99)); // 99

function getRandomItem(arr = []) {
    return Math.random;  // hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.
} 