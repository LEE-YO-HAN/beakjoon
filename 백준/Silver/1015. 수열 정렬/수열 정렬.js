const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);

const N = +n[0];
const A = arr.map(Number);
const sortedA = A.slice().sort((a, b) => a-b);
const P = Array(N).fill(-1);
A.forEach((v, i) => {
    P[i] = sortedA.findIndex((el, idx) => {
        if (el === v && !(P.includes(idx))) return true;
    });
});
console.log(P.join(" "));