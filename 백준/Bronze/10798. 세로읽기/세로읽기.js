const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(item=>item.split(""));
let newArr = Array.from({length:arr.length},()=>"")

for(let i = 0;i<arr.length;i++){
    for(let j = 0;j<arr[i].length;j++){
        newArr[j] += arr[i][j]
    }
}

console.log(newArr.join("").replaceAll("undefined",""))

