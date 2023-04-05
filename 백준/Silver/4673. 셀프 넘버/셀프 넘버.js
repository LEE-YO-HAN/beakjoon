const selfNum = (n)=>{
    let isSelf = true;
    for(let i = n;i>0;i--){
        let cnt = i;
        let num = cnt.toString()
        let len = num.length
        let sum = 0
        if(len===1) {
            sum = Number(num[0])
        } else if(len===2){
            sum = Number(num[0])+Number(num[1])
        } else if (len===3){
            sum = Number(num[0])+Number(num[1])+Number(num[2])
        } else if (len===4){
            sum = Number(num[0])+Number(num[1])+Number(num[2])+Number(num[3])
        }
        if(sum+i===n){
            isSelf = false
            break
        }
    }
    if(isSelf){
        return console.log(n)
    }
}

for(let i = 1;i<10000;i++){
    selfNum(i)
}
