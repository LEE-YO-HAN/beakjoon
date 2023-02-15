const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = 0

for(let i = 0;i<arr.length;i++){
    let checkArr = []
    for(let j = 0;j<arr[i].split("").length;j++){
        if(j===0){
            checkArr.push(arr[i][j])
        } else if(arr[i][j]!==arr[i][j-1]){
            checkArr.push(arr[i][j])
        }
    }
    checkArr.length=== [...new Set(checkArr)].length?answer+=1:answer
    checkArr = []
}

console.log(answer)