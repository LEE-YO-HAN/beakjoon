const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [N,M] = n.split(" ")

let map = new Map()
let map2 = new Map()
arr.forEach((v,i)=>{
    if(i<N) {
        map.set(`${i+1}`,v)
        map2.set(v,`${i+1}`)
    }
})

let ans=""

arr.slice(N).forEach(v=>{
    if(map.has(v)){
        ans+=map.get(v)+"\n"
    } else {
        ans+=map2.get(v)+"\n"
    }
})

console.log(ans)