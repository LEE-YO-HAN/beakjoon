const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let N = +input

console.log(Math.floor(Math.sqrt(N)));