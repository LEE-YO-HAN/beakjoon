const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [N,k] = n.split(" ").map(Number)
let K = k
let sa = arr.reverse().map(Number)

let cnt = 0
for(let i =0;i<N;i++){
    let t = sa[i]
    if(K/t>=1){
        let r = Math.floor(K/t)
        cnt+=r
        K-=r*t
    }
}
console.log(cnt)