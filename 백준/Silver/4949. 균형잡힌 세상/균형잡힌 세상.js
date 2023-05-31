const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(v=>v.split(""));
let len = arr.length

let answer = ""
for(let i=0;i<len-1;i++){
    let stack = []
    for(let j=0;j<arr[i].length;j++){
        let v = arr[i][j]
        if(v==="("){
            stack.push(v)
        }
        if(v==="["){
            stack.push(v)
        }
        if(v===")"){
            if(stack[stack.length-1]==="("){
                stack.pop()
            } else {
                stack.push(v)
                break
            }
        }
        if(v==="]"){
            if(stack[stack.length-1]==="["){
                stack.pop()
            } else {
                stack.push(v)
                break
            }
        }
    }
    if(stack.length===0){
        answer+= "yes"+"\n"
    } else {
        answer+= "no"+"\n"
    }
}

console.log(answer)