const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
let N = +n
let newArr = arr.map(Number).sort((a,b)=>a-b)
let answer = 0
for(let i =0;i<newArr.length;i++){
    newArr.forEach((v,idx)=>{
        if(idx<=i){
            answer+=v
        }
    })
}
console.log(answer)
