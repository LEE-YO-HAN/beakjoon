const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [N,M]=n.split(" ")
let map = new Map()
let s = arr.filter((v,i)=>i<N)
s.forEach(v=>{
    let [S,P] = v.split(" ")
    map.set(S,P)
})
let f = arr.filter((v,i)=>i>=N)

let ans = ""

f.forEach(v=>{
    let a = map.get(v)
    ans+= a+"\n"
})
console.log(ans)