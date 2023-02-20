const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(item=>Number(item));
const solution = (input1, input2) => {
  let answer = 0;
  let count = 0;

  for (let i = 1; i <= input1; i++) {
    if (input1 % i === 0) {
      count++;
      answer = i;
    }
    if (count === input2) {
      break;
    }
  }
  return count < input2 ? 0 : answer;
};
console.log(solution(input[0], input[1]));