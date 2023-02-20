const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(arr) {
  let answer = [];
  let newArr = arr[1].split(" ");
  newArr.sort((a, b) => a - b);
  answer.push(newArr[0]);
  answer.push(newArr[arr[0] - 1]);
  return answer.join(" ");
}
console.log(solution(arr));