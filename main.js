/*
    Đệ quy
*/

// Xoá phần tử trùng lặp
 var array = ['a', 'b', 'c', 'a', 'b', 'c'];

 // Đặc tính của Set() là các elements or values chỉ tồn tại 1
 console.log(new Set(array)); // Set(3) {'a', 'b', 'c'}

 // ... -> toán tử giải
 console.log([...(new Set(array))]); // (3) ['a', 'b', 'c']



/*
    1. Xác định điểm dừng
    2. Logic handle -> Tạo ra điểm dừng
*/

 function countDown(num) {
    if(num > 0) {

        // Loop
        console.log(num);
        return countDown(num - 1);
    }
    return num;
 }

 countDown(5);

 function loop(start, end, cb) {
    if(start <= end) {
        cb(start);
        return loop(start + 1, end, cb);
    }
 }


 var array = ['Javascript', 'PHP', 'C++'];

 loop(0, array.length - 1, function(index) {
    //console.log('index: ', index); // index:  0  index:  1  index:  2
    console.log(array[index]); // Javascript PHP C++
})

// Tính giai thừa
// Cách 1
function giaiThua(number) {
    var output = 1;
        for (var i = number; i > 0; i--) {
            output = output * i;
        }
        return output;
}

//Cách 2
function giaiThua2(number) {
    if (number > 0) {
        return number * giaiThua2(number - 1);
    }
    return 1;
}

console.log(giaiThua(6)); //720
console.log(giaiThua2(5)); //120