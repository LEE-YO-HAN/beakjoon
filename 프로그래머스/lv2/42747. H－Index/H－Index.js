function solution(citations) {
    citations.sort((a,b)=>b-a)
    let len = citations.length
    if(citations[0]===0 && citations[len-1]===0) return 0
    let answer = -1
    for(let i=0;i<len;i++){
        if(i+1>=citations[i] && citations[i]>= len-(i+1)){
            answer=i
            break
        }
    }
    return answer===-1?len:answer;
}