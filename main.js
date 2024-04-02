/*
    Cho trước mảng numbers, 
    hãy viết hàm getTotal 
    trả về tổng giá trị các phần tử của mảng.
*/

function getTotal(arr) {
    var sum = 0;

    for(var i = 0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

// Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17
