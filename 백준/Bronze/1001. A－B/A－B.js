const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(item=>Number(item));
console.log(input[0]-input[1])