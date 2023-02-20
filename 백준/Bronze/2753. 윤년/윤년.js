const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let answer = 0;
(input%4===0 && input%100!==0)||input%400===0?answer=1:answer=0
console.log(answer)