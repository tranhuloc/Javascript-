/*
    For/in loop 
*/

var myInfo = {
    name: 'Loc Tran',
    age: 18,
    address: 'Can Tho, VN'
};

for (var key in myInfo) {
    console.log(key); // name, age, address
}

for (var key in myInfo) {
    console.log(myInfo[key]); // Loc Tran, 18, Can Tho, VN
}

var languages = [
    'Javascript', 
    'PHP',
    'C++',
    'Python'
];

for (var key in languages) {
    console.log(key); // 0 1 2 3
}

for (var key in languages) {
    console.log(languages[key]); // Javascript PHP C++ Python
}

var myString = 'Javascript';

for (var key in myString) {
    console.log(key); // 0 1 2 3 4 5 6 7 8 9
}

for (var key in myString) {
    console.log(myString[key]); // J a v a s c r i p t
}

/*
    Bài tập For/in loop 
*/

function run(object) {
    var array = []; 
    for (var key in object) {
        array.push('Thuộc tính ' + [key] + ' có giá trị ' + object[key]);
    }
    return array;

}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]