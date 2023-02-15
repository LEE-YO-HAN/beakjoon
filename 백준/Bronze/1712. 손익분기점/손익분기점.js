const [L,M,N] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
if(M>=N){
    console.log(-1)
} else if(L+N<M){
    console.log(1)
} else {
    console.log(Math.floor(L/(N-M))+1)
}