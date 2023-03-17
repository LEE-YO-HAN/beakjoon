const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
console.log(arr.sort((a,b)=>b-a).join("\n"))