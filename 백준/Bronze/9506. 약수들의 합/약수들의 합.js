const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let newArr = arr.filter((item,index)=>index!==arr.length-1)

for(let i = 0;i<newArr.length;i++){
    let sum = 0
    let answer = `${newArr[i]} =`
    for(let j = 1;j<=newArr[i]/2;j++){
        if(newArr[i]%j===0){
            sum+=j 
            answer += j===1?` ${j}`:` + ${j}`
        }
    }
    Number(newArr[i])===sum?console.log(answer):console.log(`${newArr[i]} is NOT perfect.`)
}