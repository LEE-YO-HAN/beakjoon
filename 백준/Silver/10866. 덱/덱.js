const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let deque = []

let result = ""
arr.forEach(v=>{
    prompt(v)
})
function prompt(word){
    let cmd = word.split(" ")
    let newWord = cmd[0]
    switch (newWord) {
    case "push_front":
        deque.unshift(Number(cmd[1]))
        break;
    case "push_back":
        deque.push(Number(cmd[1]))
        break;
    case "pop_front":
        if(deque.length!==0){
            result+=deque.shift()+"\n"
        //    console.log(deque.shift())
        } else {
            result+= -1 + "\n"
            // console.log(-1)
        }
        break;
    case "pop_back":
        if(deque.length!==0){
            result+= deque.pop() + "\n"
            // console.log(deque.pop())
        } else {
            result+= -1 + "\n"
            // console.log(-1)
        }
        break;
    case "size":
        result+= deque.length + "\n"
        // console.log(deque.length)
        break;
    case "empty":
        // console.log(deque.length===0?1:0)
    result+= `${deque.length===0?1:0}` + "\n"
        break;
    case "front":
        if(deque.length!==0){
            result+= deque[0] + "\n"
            // console.log(deque[0])
        } else {
            result+= -1 + "\n"
            // console.log(-1)
        }
        break;
    case "back":
        if(deque.length!==0){
            result+= deque[deque.length-1] + "\n"
            // console.log(deque[deque.length-1])
        } else {
            result+= -1 + "\n"
            //  console.log(-1)
        }
        break;
}}
console.log(result)