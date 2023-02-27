const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const baskets = Array.from({length:n},(item,index)=>index+1)

// [L,M,N] = input[1]~ L~M번째 범위 내에서 N이 범위 첫번째로 가도록 회전
for (let i = 1; i <= m; i++) {
  const [L, M, N] = input[i].split(" ").map(Number);
  const selected = baskets.splice(N - 1, M - N + 1);
  baskets.splice(L - 1, 0, ...selected);
}
console.log(baskets.join(" "));
