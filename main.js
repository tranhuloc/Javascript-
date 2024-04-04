/*
    Array method:
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
*/

var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 250,
    },
    {
        id: 2,
        name: "HTML, CSS",
        coin: 0,
    },
    {
        id: 3,
        name: "Ruby",
        coin: 0,
    },
    {
        id: 4,
        name: "PHP",
        coin: 400,
    },
    {
        id: 5,
        name: "ReactJS",
        coin: 500,
    },
    {
        id: 6,
        name: "PHP",
        coin: 700,
    }
];

// forEach() -> duyệt qua từng phần tử của mảng
courses.forEach(function(course) {
    // call back
    console.log(course); // {id: 1, name: 'Javascript', coin: 250} {id: 2, name: 'HTML, CSS', coin: 0} {id: 3, name: 'Ruby', coin: 0} {id: 4, name: 'PHP', coin: 400} {id: 5, name: 'ReactJS', coin: 500}
});

courses.forEach(function(index, course) {
    // call back
    console.log(course, index);
});

// every() -> kiểm tra tất cả các phần tử phải thỏa mãn 1 diều kiện nào đó
var isFree = courses.every(function(course, index) {
    // kiểm tra tất cả các khóa học có miễn phí hay không
    return course.coin === 0;
});

console.log(isFree); // false


// some() -> kiểm tra một phần tử phải thỏa mãn 1 diều kiện nào đó
var isFree = courses.some(function(course, index) {
    // kiểm tra có khóa học miễn phí hay không
    return course.coin === 0;
});

console.log(isFree); // true


// find() -> return 1 phần tử muốn tìm kiếm
var course = courses.find(function(course, index) {
    return course.name === 'PHP';
});

console.log(course); // {id: 4, name: 'PHP', coin: 400}


// filter() -> return danh sách các phần tử muốn tìm kiếm
var listCourse = courses.filter(function(course, index) {
    return course.name === 'PHP';
});

console.log(listCourse); // (2) [{…}, {…}]  0: {id: 4, name: 'PHP', coin: 400}  1: {id: 6, name: 'PHP', coin: 700}

