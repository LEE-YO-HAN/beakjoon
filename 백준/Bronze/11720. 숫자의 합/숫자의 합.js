const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
console.log(arr[0].split("").map(Number).reduce((prev,cur)=>prev+cur,0))