const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);

let count = 0;
arr.map((item, index) => {
  if (Number(item) !== index + 1) {
    count++;
  }
});
console.log(count);
