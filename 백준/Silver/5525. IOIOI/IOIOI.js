const [n,s,t] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let N=+n
let S=+s
let Pn = "IO".repeat(N)+"I"

let cnt = 0
for(let i=0;i<=S-Pn.length;i++){
    let txt = ""
    for(let j=i;j<i+Pn.length;j++){
        txt+=t[j]
    }
    if(txt===Pn) cnt++
}
console.log(cnt)
