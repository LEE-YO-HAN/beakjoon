const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let N = Number(input)
let answer= -1;
for(let i = 0;i<=N;i++){
    if(answer!==-1) break
    if(i*3>N) break
    for(let j = 0;j<=N;j++){
        let calc = i*3+j*5
        if(calc>N){
            break
        }
        if(calc===N){
            answer = i+j
            break
        }
    }
}
console.log(answer)