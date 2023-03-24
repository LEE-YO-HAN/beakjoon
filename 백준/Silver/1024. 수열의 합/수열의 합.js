const [N, L] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let answer = []
let FOUND = false

for(let i = L;i<=100;i++){
    let newArr = Array.from({length:i},(_,index)=>{
        return Math.floor(N/i) + index
    })
    let sum = newArr.reduce((a,b)=>a+b,0)
    let minIndex = 0
    while(true){
        if(sum<=N)break
        sum -= i
        minIndex++
    }
    if(sum<N) {
        continue
    }
    if(sum===N){
        answer = newArr.map(item=>item-minIndex)
        answer[0]<0?FOUND = false:FOUND = true
        break;
    }
}

if(FOUND){
    console.log(answer.join(" "))
} else {
    console.log(-1)
}
    