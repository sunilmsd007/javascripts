const { exit } = require("process");
const readline = require("readline");   // import method

// IO operation
const readlineIOInterface = readline.createInterface({
    input: process.stdin,   
    output: process.stdout  
})

readlineIOInterface.question("Please enter year\n", function (year) {

    if( year % 4 == 0 && year % 100 != 0 || year % 400 == 0 )
    console.log("leap year")
    else
    console.log("not a leap year");
    exit(1);
    readlineIOInterface.close;
});