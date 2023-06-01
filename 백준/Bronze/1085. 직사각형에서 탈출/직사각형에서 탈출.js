const [x,y,w,h] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let t = h-y;
let b = y;
let l = x;
let r = w-x;
let p = [t,b,l,r]

console.log(Math.min(...p))
