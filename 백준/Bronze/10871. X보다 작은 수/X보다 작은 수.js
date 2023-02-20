const [n,x, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);

let newArr = arr.filter((item)=>Number(item)<x)
console.log(newArr.join(" "))