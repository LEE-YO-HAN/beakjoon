const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(item=>Number(item));

let max1 = input[0];
let max2 = input[1];
for (let i = 0; i < input[0] * input[1]; i++) {
  if (max1 === max2) {
    break;
  } else if (max1 > max2) {
    max2 += input[1];
  } else {
    max1 += input[0];
  }
}

let minArr1 = Array.from({ length: input[0] }, (item, index) => {
  if (input[0] % (index + 1) === 0) {
    return index + 1;
  }
}).filter((item) => item !== undefined);
let minArr2 = Array.from({ length: input[1] }, (item, index) => {
  if (input[1] % (index + 1) === 0) {
    return index + 1;
  }
}).filter((item) => item !== undefined);
let minArr3 = minArr1.filter((mimInt) => minArr2.includes(mimInt));

console.log(minArr3[minArr3.length - 1]);
console.log(max1);
