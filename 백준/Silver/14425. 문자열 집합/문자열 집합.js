const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = n.split(" ")
let count = 0
let map = new Map()
arr.forEach((v,i)=>{
    if(i<N){
        map.set(v)
    } else {
        if(map.has(v)){
            count++
        }
    }
})
console.log(count)