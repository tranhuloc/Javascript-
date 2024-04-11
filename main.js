/*
    Callback
    Là hàm (function) được truyền qua đối số khi gọi hàm khác
*/

function myFunction(param) {
    if (typeof param === 'function') {
        param('Hoc lap trinh');
    }
}

function myCallback(value) {
    console.log('Value: ', value);  // Value: Hoc lap trinh
}

myFunction(myCallback);



/*
    Hoàn thành function sumCb và tạo thêm các function 
    subCb, multiCb và divCb.
*/

function sumCb(a, b) {
    return a + b;
}

function subCb(a, b) {
    return a - b;
}

function multiCb(a, b) {
    return a * b;
}

function divCb(a, b) {
    return a / b;
}

function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3



