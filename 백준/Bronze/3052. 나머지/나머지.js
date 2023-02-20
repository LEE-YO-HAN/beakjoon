const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(arr) {
  let answer = 0;
  let answerArr = [];
  for (let i = 0; i < arr.length; i++) {
    answerArr.push(arr[i] % 42);
  }
  answer = [...new Set(answerArr)].length;

  return answer;
}
console.log(solution(arr));