const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// console.log(input)
const num = Number(input)
let answer = 0
let boolArr = []

//브루트 포스 방식
//4,7,44,47,74,77,444,447,474...
//4부터 올라가는데 num보다 작은 숫자들을 순회한다.
//순회하는 숫자를 split 하여 배열로 만든다. 4,7로만 이루어진 숫자를 고르고 가장 큰 수를 고르면 된다.

for(let i=num; i>0; i--){
    let arr = i.toString().split("") //["1","0","0"]
    let boolean = true
    arr.map((el)=>{
        if(el !== "7" &&  el !== "4"){
            boolean = false
        }
    })
    if(boolean){
      answer = i
      // boolArr.push(i)
      break
    }

    // arr.map((el)=>{
    //     if(el === "7" ||  el === "4"){
    //         boolean = true
    //     }
    // })
    // boolArr.push(boolean)

    // boolArr.map(el => {
    //     if(el !== true){
    //         return
    //     }
    //     else{
    //         answer = arr.join("")
    //         console.log(answer)            
    //     }
    // })
    // for(let j=0;j<arr.length;j++){
    //     if(arr[j] === "7" ||  arr[j] === "4"){
    //         answer = arr.join("")
    //         console.log(answer)
    //     }
    // }
}
// console.log(boolArr)

console.log(answer)