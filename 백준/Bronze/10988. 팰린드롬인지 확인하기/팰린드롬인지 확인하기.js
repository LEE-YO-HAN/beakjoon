const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let inputA = input.split("").reverse().join("")
console.log(input===inputA?1:0)
