/*
    For/of loop 
    Sử dụng để lấy ra từng phần tử của 1 mảng
    or lấy ra từng chữ cái của 1 chuỗi
    không thể sử dụng với object - nếu sử dụng cần biến đổi thêm
*/

var languages = ["Javascript", "PHP", "C++"];

for (var value of languages) {
    console.log(value); // Javascript PHP C++
}



var languages1 = "Javascript";

for (var value of languages1) {
    console.log(value); // J a v a s c r i p t
}



var myInfo = {
    name: "Loc Tran",
    age: 18,
};

// Trả lại mảng các key từ object
console.log(Object.keys(myInfo)); // (2) ['name', 'age']

for (var value of Object.keys(myInfo)) {
    console.log(value); // name age -> Lấy ra các key từ object
}

// Trả lại mảng các value từ object
console.log(Object.values(myInfo)); // (2) ['Loc Tran', 18]

// Lấy ra value từ object
for (var value of Object.keys(myInfo)) {
    console.log(myInfo[value]); // Loc Tran 18
}

for (var value of Object.values(myInfo)) {
    console.log(value); // Loc Tran 18
}
