/*
     Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. 
     Hàm này sẽ trả về một mảng gồm length phần tử, 
     các giá trị trong mảng là số ngẫu nhiên, 
     giá trị trong khoảng từ min tới max.

Gợi ý: 
Math.random() * (max - min) + min 
là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.
*/



function getRandNumbers(min, max, length) {
    var myArr = [];
    for (var i = 1; i <= length; i++) {
        myArr.push(Math.floor(Math.random() * (max - min) + min));
    }
    return myArr;
}