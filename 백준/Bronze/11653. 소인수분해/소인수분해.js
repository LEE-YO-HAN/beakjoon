const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let answer = ""
let newInput = input

let num = 2
while(newInput>=2){
    if(newInput%num===0){
        newInput = newInput / num
        answer += num + "\n"
        num = 2
    } else {
        num++
    }
}
console.log(answer)