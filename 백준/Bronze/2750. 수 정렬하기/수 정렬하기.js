const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let sortArr = arr.map(Number).sort((a,b)=>a-b).join("\n")
console.log(sortArr)