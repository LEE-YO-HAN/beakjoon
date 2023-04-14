const [A,B,C,D,E,F] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let answer=0
for(let x =-999;x<=999;x++){
    let ans=false
    for(let y =-999;y<=999;y++){
        if(A*x+B*y===C && D*x+E*y===F){
            ans = true
            answer = `${x} ${y}`
            break
        }
    }   
    if(ans)break
}
console.log(answer)