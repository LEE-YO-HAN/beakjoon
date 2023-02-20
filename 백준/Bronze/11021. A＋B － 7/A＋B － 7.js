const [n,...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = ""
for(let i = 0;i<n;i++){
    let sum = arr[i].split(" ").map(Number)
    answer += `Case #${i+1}: `+  (sum[0]+sum[1]) + "\n"
}
console.log(answer)