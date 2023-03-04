const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
let newArr = arr.map(Number)
let answer = 0
for(let i = 0; i<newArr.length;i++){
    let sum = 1
    for(let j =1;j<=newArr[i]/2;j++){
        newArr[i]%j===0?sum++:sum
    }
    sum===2?answer++:sum
}
console.log(answer)