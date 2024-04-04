/*
    Break & Continue in loop
*/

// Break
for (var i = 0; i < 10; i++) {
    console.log(i); // 0 -> 5

    if (i >= 5) {
        break;
    }
}



// Continue
for (var i = 0; i < 10; i++) {

    if (i%2 !== 0) {
        continue;
    }

    console.log(i); // 0 2 4 6 8
}