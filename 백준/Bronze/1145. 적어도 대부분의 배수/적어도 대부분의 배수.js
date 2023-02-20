const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number).sort((a,b)=>a-b);


let answer = 0;
for (let i = arr[0]; i <= arr[0] * arr[1] * arr[2]; i++) {
  let condition = false;
  arr.map((item, index) => {
    arr.map((item1, index1) => {
      if (index1 > index) {
        arr.map((item2, index2) => {
          if (index2 > index1) {
            if (i % item === 0 && i % item1 === 0 && i % item2 === 0) {
              answer = i;
              condition = true;
            }
          }
        });
      }
    });
  });
  if (condition) break;
}
console.log(answer);