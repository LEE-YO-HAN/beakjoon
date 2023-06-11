const [x,y] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
let N = +x
let K = +y
let i = 1;
let j = 1;
while(N*i!==K*j){
    let a = N*i
    let b = K*j
    if(a>b){
        j++
    } else if(a<b){
        i++
    }
}
console.log(K*j)