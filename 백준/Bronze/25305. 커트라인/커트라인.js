const [N,M ,...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
console.log(arr.sort((a,b)=>b-a)[M-1])