const [s,k] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
let S = +s
let K =+k
let T = S%K
let num = new Array(K).fill(parseInt(S/K))

let index = 0
while(T!==0){
    num[index%K]++
    T--
    index++
}
let answer = num.reduce((a,b)=>a*b)
console.log(answer)