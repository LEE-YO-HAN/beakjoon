const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let numArr = arr[1].split(" ").map(item=>Number(item))
let answer = 0;
numArr.map(item=>{
    if(item===Number(arr[2])){
        answer++;
    }
})
console.log(answer)