const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [a,x] =arr[0].split(" ").map(Number)
let [b,y] =arr[1].split(" ").map(Number)

let result1 = ""
let result2 = ""

let i = 1
let j = 1
while(x*i!==y*j){
    if(x*i>y*j){
        j+=1
    } else if(x*i<y*j){
        i+=1
    }
}
result1 =a*i+b*j
result2 =x*i

for(let k = result2;k >= 2; k--){
    let f = result1%k
    let c = result2%k
    if(f===0 && c===0){
        result1 /= k
        result2 /= k
    }
}
console.log(`${result1} ${result2}`)