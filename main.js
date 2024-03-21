/*
    Làm việc với Array

    Keyword: Javascript array methods

    1. To string
    2. Join
    3. Pop
    4. Push
    5. Shift
    6. Unshift
    7. Splicing
    8. Concat
    9. Slicing
*/

// 1. To string -> Chuyển kiểu array thành string
var languages = ["Javascript", "PHP", "C++"];

console.log(languages.toString()); // Javascript,PHP,C++

// 2. Join
var languages2 = ["Javascript", "PHP", "C++"];

console.log(languages2.join(" - ")); //Javascript - PHP - C++

// 3. Pop -> xóa phẩn tử ở cuối mảng và return phần tử đã xóa
var languages3 = ["Javascript", "PHP", "C++"];

console.log(languages3.pop()); // C++
console.log(languages3.pop()); // PHP
console.log(languages3.pop()); // Javascript
console.log(languages3.pop()); // undefined

console.log(languages3); // []

// 4. Push -> thêm 1 hoặc nhiều phần tử ở cuối mảng và return độ dài mới của mảng
var languages4 = ["Javascript", "PHP", "C++"];

console.log(languages4.push("Python", "Java")); // 5

console.log(languages4); // (4) ['Javascript', 'PHP', 'C++', 'Python', 'Java']

// 5. Shift -> xóa phẩn tử ở đầu mảng và return phần tử đã xóa
var languages5 = ["Javascript", "PHP", "C++"];

console.log(languages5.shift()); // Javascript
console.log(languages5.shift()); // PHP
console.log(languages5.shift()); // C++
console.log(languages5.shift()); // undefined

console.log(languages5); // []

// 6. Unshift -> thêm 1 hoặc nhiều phần tử ở đầu mảng và return độ dài mới của mảng
var languages6 = ["Javascript", "PHP", "C++"];

console.log(languages6.unshift("C#", "Python")); // 5

console.log(languages6); // (5) ['C#', 'Python', 'Javascript', 'PHP', 'C++']

// 7. Splicing -> Xóa, chèn phần tử vào vị trí bất kỳ trong mảng
var languages7 = ["Javascript", "PHP", "C++"];

languages7.splice(1, 2); // splice(vị trí bắt đầu xóa, số phần tử muốn xóa);
languages7.splice(1, 0, "Python", "C#"); // splice(vị trí bắt đầu xóa, số phần tử muốn xóa, phần tử muốn chèn);

console.log(languages7); // ['Javascript', 'Python', 'C#']

// 8. Concat -> Nối array
var languages8 = ["Java", "Python", "C#"];

console.log(languages.concat(languages8)); // (6) ['Javascript', 'PHP', 'C++', 'Java', 'Python', 'C#']

// 9. Slicing -> cắt vài phần tử or toàn bộ phần tử mảng
var languages9 = ["Javascript", "PHP", "C++", "Python", "C#"];

//slice(vị trí bắt đầu cắt, vị trí kết thúc cắt)

console.log(languages9.slice(1, 4)); // (3) ['PHP', 'C++', 'Python']
console.log(languages9.slice(-1)); // ['C#']
console.log(languages9.slice(0, 1)); // ['Javascript']
