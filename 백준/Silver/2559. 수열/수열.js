const [N,K,...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/).map(Number);

let ans = -1000000000
arr.forEach((v,index)=>{
    if(index-K<-1) return
    let sum = 0
    for(let i=index;i>index-K;i--){
        sum+=arr[i]
    }
    if(sum>ans) ans = sum
})
console.log(ans)