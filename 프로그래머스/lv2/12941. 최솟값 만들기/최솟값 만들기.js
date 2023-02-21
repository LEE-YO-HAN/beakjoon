function solution(A,B){
    let answer = 0;
    let fir = A.sort((a,b)=>a-b)
    let sec = B.sort((a,b)=>b-a)
    answer = fir.reduce((acc,cur,index)=> acc+(fir[index]*sec[index]) ,0)

    return answer;
}