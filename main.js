/*
    Callback
    1. Là hàm
    2. Truyền qua đối số
    3. Được gọi lại (trong hàm nhận đối số)
    */

Array.prototype.map2 = function(callback) {
    var output = [], arrayLength = this.length;

    for (var i = 0; i < arrayLength; ++i) {
        //callback(this[i], i);
        
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

var courses = [
    'Javascript',
    'PHP',
    'Python'
];

courses.map2(function(course, index) {
    console.log(index, course); // 0 'Javascript'; 1 'PHP'; 2 'Python'
});

var htmls = courses.map2(function(course) {
    return `<h2>${course}</h2>`;
});


// courses.map(function(course) {
//     console.log(course); // Javascript PHP Python
// });

// var htmls = courses.map(function(course) {
//     return `<h2>${course}</h2>`;
// });

 console.log(htmls.join('')); // <h2>Javascript</h2><h2>PHP</h2><h2>Python</h2>

 /*
    Hãy tạo ra phương thức myMap 
    hoạt động tương tự phương thức map2 và map
 */

    Array.prototype.myMap = function(cb) {
        var output = [], arrayLength = this.length;
    
        for (var i = 0; i < arrayLength; ++i) {
            var result = cb(this[i], i);
            output.push(result);
        }
        return output;
    }
    
    // Expected results
    // const numbers = [1, 2, 3];
    
    // console.log(numbers.myMap(function (number) {
    //     return number * 2;
    // })) // Output: [2, 4, 6]
    
    // console.log(numbers.myMap(function (number, index) {
    //     return number * index;
    // })) // Output: [0, 2, 6]
    
    
    