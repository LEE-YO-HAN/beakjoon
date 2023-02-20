let answer = ""
const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((item,index)=>{
    if(index!==0){
        let newArr = item.split(" ").map(Number)
        answer += (newArr[0] + newArr[1]) + "\n"
    }
});
console.log(answer)