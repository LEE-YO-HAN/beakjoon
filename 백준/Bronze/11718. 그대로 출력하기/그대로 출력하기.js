const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
arr.map(item=>{console.log(item)})