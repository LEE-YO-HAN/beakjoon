const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

let N = input[0]
function stars(N){
    let answer ="";
    for(let i =1;i<=N;i++){
        answer = answer+" ".repeat(N-i) +"*".repeat(i)+"\n"
    }
    return answer
}
console.log(stars(N))