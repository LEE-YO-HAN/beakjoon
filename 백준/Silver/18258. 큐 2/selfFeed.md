# 메모리 초과 해결

### 메모리 초과된 코드

```javascript

const [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let ans = ""

let queue = []
let length = 0
let cmd = {
    push:(n)=>{
        // queue.push(n);
        queue = [...queue,n]
        length++
    },
    pop:()=>{
        if(length>0){
            let val = queue[0]
            queue.shift()
            length--
            return ans+=val+"\n"
        }
        return ans+=-1+"\n"
    },
    size:()=> ans+=length+"\n",
    empty:()=>{
        if(length===0){
            return ans+= 1+"\n"
        }
        return ans+= 0+"\n"
    },
    front:()=>{
        if(length===0){
            return ans+= -1+"\n"
        }
        return ans+= queue[0]+"\n"
    },
    back:()=>{
        if(length===0){
            return ans+= -1+"\n"
        }
        return ans+= queue[length-1]+"\n"
    }
}

for(let i=0;i<N;i++){
    const [a,b] = arr[i].split(" ")
    switch(a){
        case "push":
            cmd[a](+b)
            break;
        default:
            cmd[a]()
            break;
    }
}

console.log(ans)

```

1. 기존에는 단순히 명령어를 함수로 직접 구현하고 출력하는 방식을 사용하였으나, 5%에서 메모리 초과로 해결 실패
2. 배열을 사용하는 대신 index를 적용하여 문제 해결
3. 추후에도 메모리가 부족한 문제를 해결하는 경우 index를 적극적으로 활용해야할 것 같다.

