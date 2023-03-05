const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
let answer= ""
arr.sort((a,b)=>a-b).map(item=>answer+= item+"\n")
console.log(answer)