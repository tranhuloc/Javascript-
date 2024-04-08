/*
    Ví dụ: Array method:
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
        coin: 200,
    },
    {
        id: 3,
        name: "Ruby",
        coin: 220,
    },
    {
        id: 4,
        name: "PHP",
        coin: 200,
    },
    {
        id: 5,
        name: "ReactJS",
        coin: 480,
    },
];

var i = 0;

var totalCoin = courses.reduce(function (total, course) {
    i++;

    console.log(i, total); // 1 0; 2 100; 3 300; 4 520; 5 720

    return total + course.coin;
}, 0); // initial value

console.log(totalCoin); //1200

// Tính tổng mảng numbers
var numbers = [100, 200, 220, 200, 480];

var totalCoin2 = numbers.reduce(function (total, number) {
    return total + number;
}, 0);

console.log(totalCoin2); //1200

// Flat - 'Làm phẳng' mảng từ Depth array - 'Mảng sâu'
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);

console.log(flatArray); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Lấy ra các khóa học đưa vào 1 mảng mới
topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS",
            },
            {
                id: 2,
                title: "Javascript",
            },
        ],
    },
    {
        topic: "Backend-end",
        courses: [
            {
                id: 1,
                title: "PHP",
            },
            {
                id: 2,
                title: "NodeJS",
            },
        ],
    },
];

var newCourses = topics.reduce(function (courses, topic) {
    return courses.concat(topic.courses);
}, []);

console.log(newCourses);

var htmls = newCourses.map(function (course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `;
});

console.log(htmls.join(""));

/*
    Cho trước danh sách một số bộ phim, 
    hãy viết hàm calculateRating 
    để tính điểm trung bình IMDB của những bộ phim 
    mà Christopher Nolan làm đạo diễn.

Gợi ý
Dùng phương thức filter 
để lấy ra những bộ phim do Christopher Nolan làm đạo diễn
Dùng phương thức reduce để tính tổng điểm IMDB
Tính điểm IMDB trung bình)
*/

var watchList = [
    {
        Title: "Inception",
        Year: "2010",
        Rated: "PG-13",
        Released: "16 Jul 2010",
        Runtime: "148 min",
        Genre: "Action, Adventure, Crime",
        Director: "Christopher Nolan",
        Writer: "Christopher Nolan",
        Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        Language: "English, Japanese, French",
        Country: "USA, UK",
        imdbRating: "8.8",
        imdbVotes: "1,446,708",
        imdbID: "tt1375666",
        Type: "movie",
    },
    {
        Title: "Interstellar",
        Year: "2014",
        Rated: "PG-13",
        Released: "07 Nov 2014",
        Runtime: "169 min",
        Genre: "Adventure, Drama, Sci-Fi",
        Director: "Christopher Nolan",
        Writer: "Jonathan Nolan, Christopher Nolan",
        Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        Language: "English",
        Country: "USA, UK",
        imdbRating: "8.6",
        imdbVotes: "910,366",
        imdbID: "tt0816692",
        Type: "movie",
    },
    {
        Title: "The Dark Knight",
        Year: "2008",
        Rated: "PG-13",
        Released: "18 Jul 2008",
        Runtime: "152 min",
        Genre: "Action, Adventure, Crime",
        Director: "Christopher Nolan",
        Writer: "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        Language: "English, Mandarin",
        Country: "USA, UK",
        imdbRating: "9.0",
        imdbVotes: "1,652,832",
        imdbID: "tt0468569",
        Type: "movie",
    },
    {
        Title: "Batman Begins",
        Year: "2005",
        Rated: "PG-13",
        Released: "15 Jun 2005",
        Runtime: "140 min",
        Genre: "Action, Adventure",
        Director: "Christopher Nolan",
        Writer: "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        Language: "English, Urdu, Mandarin",
        Country: "USA, UK",
        imdbRating: "8.3",
        imdbVotes: "972,584",
        imdbID: "tt0372784",
        Type: "movie",
    },
    {
        Title: "Avatar",
        Year: "2009",
        Rated: "PG-13",
        Released: "18 Dec 2009",
        Runtime: "162 min",
        Genre: "Action, Adventure, Fantasy",
        Director: "James Cameron",
        Writer: "James Cameron",
        Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        Language: "English, Spanish",
        Country: "USA, UK",
        imdbRating: "7.9",
        imdbVotes: "876,575",
        imdbID: "tt0499549",
        Type: "movie",
    },
];

function calculateRating(arr) {
    var director = arr.filter(function (item) {
        return item.Director === "Christopher Nolan";
    });

    var total = director.reduce(function (imdbTotal, imdbRate) {
        return imdbTotal + Number(imdbRate.imdbRating);
    }, 0);

    var tbImdb = total / director.length;
    return tbImdb;
}

// Expected results
console.log(calculateRating(watchList)); // Output: 8.675
