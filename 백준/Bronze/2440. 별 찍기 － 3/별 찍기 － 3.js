const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

let N = input[0]
function stars(N){
    let answer ="";
    for(let i =N;i>0;i--){
        answer = answer+"*".repeat(i)+"\n"
    }
    return answer
}
console.log(stars(N))
