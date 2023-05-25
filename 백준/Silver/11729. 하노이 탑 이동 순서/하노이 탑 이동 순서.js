const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let N = +input
let cnt = 0
let answer= ""

const hanoi = (n, start, others,end) =>{
    if(n===0){
        return
    } else {
        hanoi(n - 1, start, end, others)
        answer  += start + " " + end + "\n"
        cnt++
        hanoi(n - 1, others, start, end)
    }
}

hanoi(N, 1,2,3)
console.log(cnt)
console.log(answer)