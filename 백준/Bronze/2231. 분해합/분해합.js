const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(num) {
  let count = 0;
  let boolean = false;
  while (count <= num) {
    count++;
    let number = count
      .toString()
      .split("")
      .map((item) => Number(item));
    let numSum = 0;
    for (let i = 0; i < number.length; i++) {
      numSum += number[i];
    }
    if (count + numSum === num) {
      boolean = true;
      break;
    }
  }
  return boolean ? count : 0;
}
console.log(solution(Number(input)));