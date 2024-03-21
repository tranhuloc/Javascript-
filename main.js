/*
    Object constructor

    Phải viết hoa chữ cái đầu của tên Object constructor
*/

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Loc', 'Tran', 'Avatar');
var user = new User('Tai', 'Nguyen', 'Avatar');

author.title = 'Chia se dao tai F8';
user.comment = 'Khoa JS nang cao...'

console.log(author.getName());
console.log(user);