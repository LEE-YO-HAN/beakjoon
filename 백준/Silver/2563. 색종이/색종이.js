const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let area = new Array(100).fill().map(el => new Array(100).fill(false));
let newArr1 = arr.map(item=>item.split(" ").map(Number))

for(let i =0;i<n;i++){
    let x = newArr1[i][0]
    let y = newArr1[i][1]
    for(let j =0;j<10;j++){   
        for(let k =0;k<10;k++){
            area[x+j][y+k] = true;
        }   
    }
}

let answer = 0
area.map(item=>{
    item.map(item1=>{
        item1?answer++:item1
    })
})
console.log(answer)