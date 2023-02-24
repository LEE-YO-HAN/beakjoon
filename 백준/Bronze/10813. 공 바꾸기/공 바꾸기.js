const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [M,N] = n.split(" ")
let balls = Array.from({length:M},(item,index)=>{
    return index+1
})
let newArr = arr.map(item=>item.split(" ").map(Number))
newArr.map((item)=>{
    let fir = item[0] - 1
    let sec = item[1] - 1
    let newfir = balls[fir]
    let newSec = balls[sec]
    balls[fir] = newSec
    balls[sec] = newfir
})
console.log(balls.join(" "))