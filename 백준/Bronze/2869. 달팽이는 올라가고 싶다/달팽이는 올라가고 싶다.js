const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(item=>Number(item));

if (arr[0] === arr[2]) {
  console.log(1);
} else if (Math.ceil((arr[2] - arr[0]) / (arr[0] - arr[1])) + 1 < 1) {
  console.log(2);
} else {
  console.log(Math.ceil((arr[2] - arr[0]) / (arr[0] - arr[1])) + 1);
}
