const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let answer=""
for(const data of arr.map(item=>item.split(" ").map(Number))){
    const [N,M] = data
    let pow = 1;
    for(let i=0;i<M;i++){
        pow= (pow*N)%10;
    }
    pow===0?answer+=10+"\n":answer+=pow+"\n"
}
console.log(answer)