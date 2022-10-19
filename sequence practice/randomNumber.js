//Write a program that reads 5 Random 2 Digit values, then find their sum and the average
let a = Math.floor(Math.random() * 90 + 10 );
let b = Math.floor(Math.random() * 90 + 10 );
let c = Math.floor(Math.random() * 90 + 10 );
let d = Math.floor(Math.random() * 90 + 10 );
let e = Math.floor(Math.random() * 90 + 10 );
console.log("a:" +a+ " b:" +b+ " c:" +c+ " d:" +d+ " e:" +e);
let sum = a + b + c + d + e;
console.log("sum is : " +sum);
let average = sum / 5;
console.log("average is : " +average);