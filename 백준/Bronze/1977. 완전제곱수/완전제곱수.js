const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(item=>Number(item));

const solution = (input1, input2) => {
  let sum = 0;
  let min = 0;
  for (let i = input1; i <= input2; i++) {
    if (Math.pow(Math.floor(Math.sqrt(i)), 2) === i) {
      sum += i;
      if (min === 0) {
        min = i;
      }
    }
  }

  return min === 0 ? -1 : sum + "\n" + min;
};

console.log(solution(arr[0], arr[1]));