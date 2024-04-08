/*
    Array method:
        reduce()
*/

Array.prototype.reduce2 = function (callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
};

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce2((total, number, index, array) => {
    console.log(total, number, index, array);
    return total + number;
}, 10);

console.log(result);


/*
    Quan sát expected results và hoàn thành code còn thiếu
*/

// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
]; 

// Cách 1
function arrToObj(arr) {
    return arr.reduce(function(obj, current) {
        obj[current[0]] = current[1]
        return obj;
    }, {});
}

// Cách 2
function arrToObj(arr) {
    return arr.reduce((result, item) => {
        return Object.assign({[item[0]]: item[1]}, result);
    } , {});
}

console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
