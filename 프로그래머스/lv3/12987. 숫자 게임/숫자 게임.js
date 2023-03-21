function solution(A, B) {
    let answer = 0;
    let newA = A.sort((a,b)=>b-a)
    let newB = B.sort((a,b)=>b-a)
    let except = []
    
    let index = 0
    for(const a of newA){
        if(a<newB[index]){
            answer++
            index++
        }
    }
    return answer;
}