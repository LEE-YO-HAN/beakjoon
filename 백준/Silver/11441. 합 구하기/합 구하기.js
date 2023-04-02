const [l,m,n,...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let L = +l
let M = m.split(" ").map(Number)
let N = +n
let newArr = arr.map(el=>el.split(" ").map(Number))

let answer=""
let BF = new Array(L+1).fill(0)
for(let i =0;i<L;i++){
    BF[i+1]=BF[i]+M[i]
}
newArr.forEach(el=>{
    answer+=BF[el[1]]-BF[el[0]-1]+"\n"
})

console.log(answer)