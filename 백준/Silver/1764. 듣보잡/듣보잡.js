const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [N,M] = n.split(" ").map(Number)
let answer= []

let map = new Map()
for(let i =0;i<arr.length;i++){
    if(i<N){
        map.set(arr[i])
    } else {
        if(map.has(arr[i])){
            answer.push(arr[i])
        }
    }
}
console.log(answer.length)
console.log(answer.sort((a,b)=>{
    if(a>b)return 1
    if(a<b)return -1
    if(a===b)return 0
}).join("\n"))