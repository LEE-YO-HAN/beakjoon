const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
for(const v of arr){
    const [H,W,N] = v.split(" ").map(Number)
    let f = 0
    let w = 1
    for(let i = 1;i<=N;i++){
        f++
        if(f>H){
            f=1
            w++
        }
    }
console.log(`${f}${w<10?0:""}${w}`)
}