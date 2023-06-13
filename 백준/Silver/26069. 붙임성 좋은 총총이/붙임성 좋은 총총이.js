const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let set = new Set()
set.add("ChongChong")
arr.forEach(v=>{
    let [A,B] = v.split(" ")
    if(set.has(A)||set.has(B)){
        set.add(A)
        set.add(B)
    }
})

console.log(set.size)