//program to find fibonacci series of a number
const prompt = require('prompt-sync')();
const n = prompt("Enter integer: ");
let n1 = 0;
let n2 = 1;
let n3;
for(let i=0; i<n; i++){
    console.log(n1)
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3
}