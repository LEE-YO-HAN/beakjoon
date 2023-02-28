const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let UniAvg = {
    "A+":4.5,"A0":4.0,"B+":3.5,
    "B0":3.0,"C+":2.5,"C0":2.0,
    "D+":1.5,"D0":1.0,"F":0}
let sum = 0
let majorSum = 0
input.forEach(item=>{
    const [name,score,division] = item.split(" ")
    if(division==="P"){
        false
    } else {
        sum+=Number(score)
        majorSum+=Number(score)*UniAvg[division]
    }
})
console.log(majorSum/sum)
