const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let Q = 25
let D = 10
let N = 5
let P = 1
let answer = ""
for(let i of arr){
    let C = i
    let cArr = [0,0,0,0]
    while(C!==0){
        if(Math.floor(C/Q)!==0){
            cArr[0] = Math.floor(C/Q)
            C = C%Q
        } else if(Math.floor(C/D)!==0){
            cArr[1] = Math.floor(C/D)
            C = C%D
        } else if(Math.floor(C/N)!==0) {
            cArr[2] = Math.floor(C/N)
            C = C%N
        } else if(Math.floor(C/P)!==0) {
            cArr[3] = Math.floor(C/P)
            C = C%P
        }
    }
    console.log(cArr.join(" "))
}