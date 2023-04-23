const [a,b,c,d] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let m = new Map()
b.split(" ").forEach(v=>{
    if(m.has(v)){
        m.set(v,m.get(v)+1)
    } else {
        m.set(v,1)
    }
})
let ans = ""
d.split(" ").forEach(v=>{
    if(m.has(v)){
        ans += m.get(v) + " "
    } else {
        ans += 0 +" "
    }
})
console.log(ans)

