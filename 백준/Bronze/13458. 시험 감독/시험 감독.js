const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
function solution(arr) {
  let answer = 0;
  let testRoom = Number(arr[0]);
  let testers = arr[1].split(" ");
  let viewersTesters = Number(arr[2].split(" ")[0]);
  let subViewersTesters = Number(arr[2].split(" ")[1]);


  for (let i = 0; i < testRoom; i++) {
    if (testers[i] <= viewersTesters) {
      answer += 1;
    } else if (testers[i] - viewersTesters < subViewersTesters) {
      answer += 2;
    } else {
      answer +=
        Math.ceil((testers[i] - viewersTesters) / subViewersTesters) + 1;
    }
  }
  return answer;
}
console.log(solution(arr));