const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N,M] = n.split(" ")
let newArr = arr.map(item=>item.split(" ").map(Number))
let firArr = newArr.filter((item,index)=>index<N)
let secArr = newArr.filter((item,index)=>index>=N)
let answer = ""
for(let i =0; i<N;i++){
    for(let j =0; j<M;j++){
        let sum = firArr[i][j]+secArr[i][j]
        j===M-1?answer+=sum+"\n":answer+=sum+" "
    }   
    
}
console.log(answer)