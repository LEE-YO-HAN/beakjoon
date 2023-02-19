const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number).sort((a,b)=>a-b);
let avg = arr.reduce((prev,cur)=> prev+cur,0)
console.log(avg/arr.length)
console.log(arr[Math.floor(arr.length/2)])