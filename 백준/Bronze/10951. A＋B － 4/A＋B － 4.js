let answer = ""
const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((item,index)=>{
  let sum = item.split(" ").map(Number)
  answer += (sum[0]+sum[1])+"\n"  
});

console.log(answer)