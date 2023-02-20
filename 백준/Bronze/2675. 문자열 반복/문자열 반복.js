const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let answer = ""

arr.map((item)=>{
    let [m,...itemArr] = item.split(" ")
    itemArr[0].split("").map((item,index)=>{
        for(let i =1; i<=m;i++){
            answer += item
        }
       
    })
            answer+="\n"
})
console.log(answer)