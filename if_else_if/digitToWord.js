const { exit } = require("process");
const readline = require("readline");   // import method

// IO operation
const readlineIOInterface = readline.createInterface({
    input: process.stdin,   
    output: process.stdout  
})

readlineIOInterface.question("Please enter any single digit number\n", function (number) {

    if( number == 0)
    console.log("entered number is zero")
    else if(number == 1)
    console.log("entered number is one");
    else if(number == 2)
    console.log("entered number is two");
    else if(number == 3)
    console.log("entered number is three");
    else if(number == 4)
    console.log("entered number is four");
    else if(number == 5)
    console.log("entered number is five");
    else if(number == 6)
    console.log("entered number is six");
    else if(number == 7)
    console.log("entered number is seven");
    else if(number == 8)
    console.log("entered number is eight");
    else if(number == 9)
    console.log("entered number is nine");
    else
    console.log("enter valid number")
    exit(1);
    readlineIOInterface.close;
});