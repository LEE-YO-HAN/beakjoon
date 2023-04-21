const [a,b,c,d] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let N = Number(a)
let M = Number(c)
let me = b.split(" ")
let mrr = d.split(" ")

let set =  new Set()
me.forEach(v=>{
    set.add(v)
})
let answer = ""
mrr.forEach(v=>{
    if(set.has(v)){
        answer+="1 "
    } else {
        answer+="0 "
    }
})
console.log(answer)