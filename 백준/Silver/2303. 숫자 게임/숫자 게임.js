const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let newArr = arr.map(item=>item.split(" ").map(item=>Number(item)))

let answer = 0;
let sumCount = 0;
let prevAllCount = 0;
newArr.map((item, index) => {
  for (let i = 0; i < item.length; i++) {
    for (let j = i + 1; j < item.length; j++) {
      for (let k = j + 1; k < item.length; k++) {
        let count = item[i] + item[j] + item[k];
        if (sumCount <= count % 10) {
          answer = index + 1;
          sumCount = count % 10;
          prevAllCount = count;
        }
      }
    }
  }
});
console.log(answer);