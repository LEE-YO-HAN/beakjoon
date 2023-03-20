const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [K,R,M] = arr[0].split(" ")
let moveArr = arr.slice(1)

// let col = ["A","B","C","D","E","F","G",'H']
// let king = K.split("").map((item,index)=>{
//     if(index===0){
//         return col.indexOf(item)+1
//     } else {
//         return Number(item)
//     }    
// })
// let rock = R.split("").map((item,index)=>{
//     if(index===0){
//         return col.indexOf(item)+1
//     } else {
//         return Number(item)
//     }
// })

// for(let i = 0;i<M;i++){
//     let cmd = move(king,moveArr[i])
//     if(Array.isArray(cmd)){
//         king[0] += cmd[0]
//         king[1] += cmd[1]

//         if(king[0]===rock[0] && king[1]===rock[1]){
//             let cmd1 = move(rock,moveArr[i])
//             if(Array.isArray(cmd1)){
//                 rock[0] += cmd1[0]
//                 rock[1] += cmd1[1]
//             } else {
//                 king[0] -= cmd[0]
//                 king[1] -= cmd[1]
//             }
//         }
//     }
// }

// let kingXY = [col[king[0]-1],king[1]].join("")
// let rockXY = [col[rock[0]-1],rock[1]].join("")
// let answer = ""
// answer+=kingXY+"\n"
// answer+=rockXY
// console.log(answer)


// function move(char,cmd) {
//     if(cmd==="R"){
//         if(char[0]!==8) return [1,0]
//     }
//     if(cmd==="L"){
//         if(char[0]!==1) return [-1,0]
//     }
//     if(cmd==="B"){
//         if(char[1]!==1) return [0,-1]
//     }
//     if(cmd==="T"){
//         if(char[1]!==8) return [0,1]
//     }
//     if(cmd==="RT"){
//         if(char[0]!==8 || char[1]!==8) return [1,1]
//     }
//     if(cmd==="LT"){
//         if(char[0]!==1 || char[1]!==8) return [-1,1]
//     }
//     if(cmd==="RB"){
//         if(char[0]!==8 || char[1]!==1) return [1,-1]
//     }
//     if(cmd==="LB"){
//         if(char[0]!==1 || char[1]!==1) return [-1,-1]
//     }
// }

const col = ["A", "B", "C", "D", "E", "F", "G", "H"];

const parsePosition = (pos) => [
  col.indexOf(pos[0]) + 1,
  Number(pos[1])
];

let [kingX, kingY] = parsePosition(K);
let [rockX, rockY] = parsePosition(R);

const moves = {
  R: [1, 0],
  L: [-1, 0],
  B: [0, -1],
  T: [0, 1],
  RT: [1, 1],
  LT: [-1, 1],
  RB: [1, -1],
  LB: [-1, -1]
};

for (const cmd of moveArr) {
  let [dx, dy] = moves[cmd];
  let [nextX, nextY] = [kingX + dx, kingY + dy];

  if (nextX < 1 || nextX > 8 || nextY < 1 || nextY > 8) continue;

  if (nextX === rockX && nextY === rockY) {
    let [nextRockX, nextRockY] = [rockX + dx, rockY + dy];

    if (nextRockX < 1 || nextRockX > 8 || nextRockY < 1 || nextRockY > 8)
      continue;

    rockX = nextRockX;
    rockY = nextRockY;
  }

  kingX = nextX;
  kingY = nextY;
}

const kingPos = col[kingX - 1] + kingY;
const rockPos = col[rockX - 1] + rockY;

console.log(`${kingPos}\n${rockPos}`);