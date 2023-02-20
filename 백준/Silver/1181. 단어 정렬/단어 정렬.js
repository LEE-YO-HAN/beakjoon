const [n,...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let union = [...new Set(arr)]
let newArr = union.sort().sort((a,b)=>{ return a.length - b.length})

for(let i = 0; i<newArr.length;i++){
    console.log(newArr[i])
}
