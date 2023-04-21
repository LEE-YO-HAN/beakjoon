const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let set = new Set()
arr.forEach(v=>{
    const [N,M]=v.split(" ")
    if(!set.has(N) && M==="enter"){
        set.add(N)
    }else if(set.has(N) && M==="leave"){
        set.delete(N)
    }
})
let answer = []
set.forEach(v=>answer.push(v))
console.log(answer.sort().reverse().join("\n"))