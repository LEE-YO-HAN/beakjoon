const [nl,n,ml,m] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let N = n.split(" ").map(Number)
let M = m.split(" ").map(Number)

let set = new Set()
N.forEach(el=>{
    set.add(el)
})
let ans= ""
M.forEach(el=>{
    if(set.has(el)){
        ans+= 1 + "\n"
    } else {
        ans+= 0 + "\n"
    }
})
console.log(ans)