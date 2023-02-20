const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ")[0].split("\n").map(item=>Number(item)).sort((a,b)=>a-b)
let answer = [];
let deleteArr = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    let count = 0;
    arr.map((item, index) => {
      if (index === i || index === j) {
        false;
      } else {
        count += item;
      }
    });
    if (count === 100) {
      deleteArr.push(i, j);
      break;
    }
  }
}
answer = arr
  .map((item, index) => {
    if (index === deleteArr[0] || index === deleteArr[1]) {
      return;
    } else {
      return item;
    }
  })
  .filter((item) => item !== undefined);

console.log(answer.join("\n"));