/*
    Câu lệnh rẽ nhánh - Switch
*/

var date = 7;

switch (date) {
    case 2:
        console.log("Hom nay la thu 2");
        break;
    case 3:
        console.log("Hom nay la thu 3");
        break;
    case 4:
        console.log("Hom nay la thu 4");
        break;
    case 5:
        console.log("Hom nay la thu 5");
        break;
    case 6:
        console.log("Hom nay la thu 6");
        break;
    case 7:
        console.log("Hom nay la thu 7");
        break;
    default:
        console.log("Khong biet");
}

// Khi so sánh tính đúng sai sử dụng if - else: > < !==
// Khi cho trước giá trị và số case >= 3 sử dụng switch - case

function run(fruits) {
    var result;

    switch (fruits) {
        case "Banana":
            result = "This is a Banana";
            break;
        case "Apple":
            result = "This is an Apple";
            break;
    }

    return result;
}