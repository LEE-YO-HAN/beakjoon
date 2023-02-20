let answer = 0;
let boolean = 0;
let newArr = []
const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(item=> Number(item));
arr.sort((a, b) => a - b);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    boolean += 1;
  } else {
    answer += arr[i];
    newArr.push(arr[i]);
  }
}
if (boolean === 7) {
  console.log(-1);
} else {
  console.log(answer);
  console.log(newArr[0]);
}
