const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let words = "long ".repeat(input/4)
console.log(words + "int")