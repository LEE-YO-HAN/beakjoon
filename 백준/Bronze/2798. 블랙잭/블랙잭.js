const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(item=>item.split(" ").map(item=>Number(item)));

let answer = 0;
arr[1].map((item, index) => {
  arr[1].map((item1, index1) => {
    arr[1].map((item2, index2) => {
      if (item1 > item && item2 > item1) {
        let sum = item + arr[1][index1] + arr[1][index2];
        if (sum <= arr[0][1] && answer < sum) {
          answer = sum;
        }
      }
    });
  });
});

console.log(answer);
