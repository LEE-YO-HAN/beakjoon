const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [ L, M ] = n.split(" ")
let newArr = arr.map(item=>item.split(" ").map(Number))
let basket = Array.from({length:L},(el,index)=>index+1)

for(let i = 0;i < M; i++){
    let fir = newArr[i][0]-1
    let sec = newArr[i][1]
    let RA = []
    for(let j = fir; j<sec;j++){
        RA.push(basket[j])
    }
    RA.reverse()
    let index = 0
    for(let j = fir; j<sec;j++){
        basket[j] = RA[index]
        index++
    }
}
console.log(basket.join(" "))
