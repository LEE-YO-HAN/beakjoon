const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let answer = ""
let queue = []
const cmd = {
    push:(v)=>queue.push(v),
    pop:()=>{if(queue.length===0){answer+=-1+"\n"}else{answer+=queue.shift()+"\n"}},
    size:()=>answer+=queue.length+"\n",
    empty:()=>queue.length===0?answer+=1+"\n":answer+=0+"\n",
    front:()=>queue.length!==0?answer+=queue[0]+"\n":answer+=-1+ "\n",
    back:()=>queue.length!==0?answer+=queue[queue.length-1]+"\n":answer+=-1+ "\n"
}
for(let v of arr){
    if(v.indexOf("push")>=0){
        cmd["push"](v.split(" ")[1])
    } else {
        cmd[v]()
    }
}
console.log(answer)