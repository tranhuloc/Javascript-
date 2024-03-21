/*
    Object trong Javascript

*/

var sexKey = "sex";

var myInfo = {
    name: "Loc Tran",
    age: 18,
    address: "Can Tho, VN",
    [sexKey]: "male",
};

console.log(myInfo); // {name: 'Loc Tran', age: 18, address: 'Can Tho, VN', sex: 'male'}

// Thêm key và value mới
myInfo.email = "locth@gmail.com";

console.log(myInfo); // {name: 'Loc Tran', age: 18, address: 'Can Tho, VN', sex: 'male', email: 'locth@gmail.com'}

myInfo["my-phone"] = "0123456789";

console.log(myInfo); // {name: 'Loc Tran', age: 18, address: 'Can Tho, VN', sex: 'male', email: 'locth@gmail.com', my-phone: '0123456789'}

// Lấy value ra
console.log(myInfo.name); // Loc Tran

console.log(myInfo.class); // undefined

console.log(myInfo["email"]); // locth@gmail.com

var myKey = "address";

console.log(myInfo[myKey]); // Can Tho, VN

// Xóa 1 cặp key: value
delete myInfo.sex;

console.log(myInfo); // {name: 'Loc Tran', age: 18, address: 'Can Tho, VN', email: 'locth@gmail.com', my-phone: '0123456789'}

var myInfo2 = {
    name: "Loc Tran", // -> Thuộc tính / property
    age: 18,
    address: "Can Tho, VN", 
    [sexKey]: "male",
    getName: function() {  // -> Phương thức / method
        return this.name; // myInfor2.name
    },
};

// Function -> Phương thức / method
// Others -> Thuộc tính / property

console.log(myInfo2.getName()); // Loc Tran
