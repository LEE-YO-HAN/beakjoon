const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let allStudent = arr[arr.length - 1];
let A = 0;
for (let i = 1; i < allStudent / arr[0]; i++) {
  for (let j = 1; j < allStudent / arr[1]; j++) {
    for (let k = 1; k < allStudent / arr[2]; k++) {
      let count = i * arr[0] + j * arr[1] + k * arr[2];
      if (count === allStudent) {
        A = 1;
        break;
      }
    }
  }
}
console.log(A);