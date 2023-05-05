const [n,m] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
let N = n.split("").reverse()
let B = +m
let ans = 0
let map = new Map()
let apb = new Array(26).fill(0).forEach((v,i)=>{
    map.set(String.fromCharCode(i+65),i+10)
})
N.forEach((v,i)=>{
    if(v>="A" && v<="Z"){
        ans += map.get(v)*(B**i)
    } else {
        ans+= +v*(B**i)
    }
})
console.log(ans)