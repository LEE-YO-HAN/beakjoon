const N = +require("fs").readFileSync("/dev/stdin").toString().trim();
let answer = 0;
let square = 1;
for(let i = 1;i<=N;i++){
    square *= 4
}
let width = Math.sqrt(square)
answer = (width+1)**2
console.log(answer)