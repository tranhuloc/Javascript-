/*
    Object prototype - Basic

    1. Prototype là gì?
    2. Sử dụng khi nào? 
*/

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
}

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}

var user = new User('Loc', 'Tran', 'Avatar');
var user2 = new User('Tai', 'Nguyen', 'Avatar');

console.log(user.getClassName());
console.log(user2.className);