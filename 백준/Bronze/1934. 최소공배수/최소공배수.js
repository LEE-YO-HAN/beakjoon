const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let answer =""

for(let v of arr){
    v=v.split(" ").map(Number)
    let x = v[0]
    let y = v[1]
    let i = 1
    let j = 1
    let result = 0;
    while(x*i!==y*j){
        if(x*i>y*j){
            j+=1
        } else if(x*i<y*j){
            i+=1
        }
    }
    result = x*i
    answer+=result + "\n"
}
console.log(answer)