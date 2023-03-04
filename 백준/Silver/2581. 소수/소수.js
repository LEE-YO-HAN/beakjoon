const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let fir = 0
let answer = 0
for(let i = input[0];i<=input[1];i++){
    let sum = 1
    for(let j = 1;j<=i/2;j++){
        i%j===0?sum++:sum
    }
    if(answer===0 && sum===2){
        fir = i
        answer = i
    } else if(sum===2) {
        answer+=i
    }
}
if(fir===0){
    console.log(-1)
} else {
    console.log(answer)
    console.log(fir)
}