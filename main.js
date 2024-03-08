/*
Toán tử ++ --
Prefix & Postfix
*/      

var a = 6;
 
var output = a++;

//Việc 1: `a copy`, `a copy` = 6
//Việc 2: +1 cho a, a = a + 1 => a = 7
//Việc 3: trả về `a copy`
console.log('output: ', output); //output = 6


console.log('a: ', a); //a = 7