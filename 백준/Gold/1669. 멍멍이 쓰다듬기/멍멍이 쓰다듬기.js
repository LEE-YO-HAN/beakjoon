const [x,y] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
let X = +x
let Y = +y
let len = Y-X

if(len===0){
    console.log(0)
} else {
    let n = parseInt(len**0.5)
    if(n**2===len){
        console.log(2*n-1)
    } else {
        let m = len-n**2
        if(m<=n){
            console.log(2*n)
        } else {
            console.log(2*n+1)
        }
    }
}
