function solution(n, stations, w) {
    // return sol1(n,stations,w)
    return sol2(n,stations,w)
}

function sol2(n,stations,w){
    let answer = 0;
    let index = 0;
    let start = 1;
    
    while(start <= n){
        let st = stations[index]
        if(start <= st + w && st - w <=start){
            start = st + w;
            index++;
        } else{
            start += 2 * w;
            answer++;
        }
        start++;
    }
    return answer;
}

function sol1(n,stations,w){
    let index=0
    let count = 0
    let answer = 0
    let range = w*2+1
    for(let i=0;i<n;i++){
        let st = stations[index]-1
        if(st-w<=i && i<=st+w){
            if(i===st+w) {
               index++
            }
            if(count!==0){
                count = 0
                answer++
            }
        } else {
            count++
            if(count===range){
                answer++
                count=0
            }
        }
    }
    if(count>0){
        answer++
    }
    return answer
}