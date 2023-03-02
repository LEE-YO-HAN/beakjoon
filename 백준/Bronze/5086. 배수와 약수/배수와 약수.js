const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").filter(item=>item!== "0 0").map(item=>item.split(" ").map(Number));

arr.map(item=>{
    if(item[1]%item[0]===0){
        console.log("factor")
    } else if(item[0]%item[1]===0){
        console.log("multiple")
    } else {
        console.log("neither")
    }
})