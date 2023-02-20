const [n,m,...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let sum = 0;
arr.map((item)=>{
    let addItem = item.split(" ").map(Number)
    sum += addItem[0]*addItem[1]
})
console.log(sum==n?"Yes":"No")