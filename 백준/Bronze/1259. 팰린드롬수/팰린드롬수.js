const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(arr) {
  let answer = "";
  let text = "";
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if ([...arr][i].split("")[j] === [...arr][i].split("").reverse()[j]) {
        text = "yes";
      } else {
        text = "no";
        break;
      }
    }
    answer = answer + text + "\n";
  }

  return answer;
}
console.log(solution(input));