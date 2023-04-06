function solution(n) {
    let firTR = n.toString(2).split("").filter(el=>el==="1").length
    let N = n
    let answer = 0
    while(true){
        N++
        let tr = N.toString(2).split("").filter(el=>el==="1").length
        if(tr===firTR){
            answer=N
            break
        }
    }
    
    return answer;
}