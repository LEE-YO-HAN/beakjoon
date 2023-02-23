const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let newN = n.split(" ").map(Number)
let newArr = arr.map(item=>item.split(" ").map(Number))
let blank = Array.from({length:newN[0]},()=>0)
newArr.map((item)=>{
    let [L,M,N] = item;
    blank.map((item1,index1)=>{
        if(L-1<=index1 && index1<=M-1){
            blank[index1] = N
        }
    })
})
console.log(blank.join(" "))