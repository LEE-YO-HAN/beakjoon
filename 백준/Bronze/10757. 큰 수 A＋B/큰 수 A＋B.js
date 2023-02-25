const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const [M,N] = input
console.log((BigInt(M)+BigInt(N)).toString());