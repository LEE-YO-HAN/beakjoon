const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
console.log(arr.map(Number).sort((a,b)=>a-b).join(" "))