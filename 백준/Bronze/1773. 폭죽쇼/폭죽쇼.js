const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((item,index)=>index===0?item.split(" ").map(item=>Number(item)):Number(item));
let answer = 0;
for (let i = 1; i <= arr[0][1]; i++) {
  let boom = false;
  arr.map((item, index) => {
    if (index !== 0) {
      i % item === 0 ? (boom = true) : boom;
    }
  });
  boom ? answer++ : answer;
}
console.log(answer);
