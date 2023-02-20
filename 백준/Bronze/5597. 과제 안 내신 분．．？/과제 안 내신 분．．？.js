const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(arr) {
  let allStudent = Array.from({ length: 30 }, (item, index) => {
    return index + 1;
  });
  let noResult = allStudent.filter(
    (item) => !arr.map((item) => Number(item)).includes(item)
  );
  return noResult;
}
console.log(solution(arr)[0]);
console.log(solution(arr)[1]);