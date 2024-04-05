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
        coin: 100,
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
        coin: 15,
    },
    {
        id: 5,
        name: "ReactJS",
        coin: 12,
    },
    {
        id: 6,
        name: "PHP",
        coin: 50,
    },
];

// map() -> dùng để chỉnh sửa các element của 1 array, 
// return 1 mảng mới có số lượng phẩn tử = số lượng phần tử có giá trị của mảng cũ
// function courseHandler(course) {
//     console.log(course)
// }

// var newCourses = courses.map(courseHandler);

function courseHandler(course, index) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
    };
}


var newCourses = courses.map(courseHandler);