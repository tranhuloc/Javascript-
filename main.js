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


// filter() -> return danh sách các phần tử muốn tìm kiếm
var listCourse = courses.filter(function (course, index) {
    return course.name === "PHP";
});

console.log(listCourse); // (2) [{…}, {…}]  0: {id: 4, name: 'PHP', coin: 400}  1: {id: 6, name: 'PHP', coin: 700}

/*
Hãy tạo hàm getMostFavoriteSport 
có 1 tham số 
(F8 sẽ gọi hàm này và luôn truyền đối số là 1 array). 
Hàm getMostFavoriteSport sẽ trả về các môn thể thao 
có điểm số yêu thích lớn hơn 5.

Gợi ý: Sử dụng phương thức filter.
*/

const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(array) {
    var listSport = array.filter(function(item, index) {
        listSport = item.like > 5
    });
    return listSport;
}



// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]





