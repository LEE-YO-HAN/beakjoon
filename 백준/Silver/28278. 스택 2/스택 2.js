const [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let stack = []
let ans = "";

const cmd = {
    one:(num)=>stack.push(num),
    two:()=>{
        if(stack.length===0){
            ans+="-1"+"\n"
        } else {
            let pop = stack.pop();
            ans+=pop+"\n"
        }
    },
    three:()=>ans+=stack.length+"\n",
    four:()=>stack.length===0?ans+="1"+"\n":ans+="0"+"\n",
    five:()=>stack.length===0?ans+="-1"+"\n":ans+=stack[stack.length-1]+"\n"
}

arr.forEach(command=>{
    switch (command[0]) {
        case "1":
            cmd.one(command.split(" ")[1])
            break;
        case "2":
            cmd.two()
            break;
        case "3":
            cmd.three()
            break;
        case "4":
            cmd.four()
            break;
        case "5":
            cmd.five()
            break;
    }
})

console.log(ans)

