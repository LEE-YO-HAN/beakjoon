const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let N = +n
let crane = arr[0].split(" ").map(Number).sort((a,b)=>b-a)
let M = +arr[1]
let box = arr[2].split(" ").map(Number).sort((a,b)=>b-a)

if(crane[0]<box[0]){
    console.log(-1)
} else {
    let minutes = 0
    while(box.length){
        for(let i=0;i<N;i++){
            for(let j=0;j<M;j++){
                if(crane[i]>=box[j]){
                    box.splice(j,1);
                    break
                }
            }
        }
        minutes++
    }
    console.log(minutes)
}