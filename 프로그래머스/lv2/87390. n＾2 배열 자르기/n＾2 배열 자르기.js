function solution(n, left, right) {
    // let ans = Array.from({length:n},(v,i)=>Array.from({length:n},(w,j)=>i===j?j+1:i>j?i+1:j+1))
    let answer = [];
    let index = 0
    // for(let i=0;i<n;i++){
    //     for(let j=0;j<n;j++){
    //         const posNum = i===j?j+1:i>j?i+1:j+1
    //         if(left<=index &&index<=right){
    //             answer.push(posNum)
    //         }
    //         index++
    //     }
    //     if(index>right)break
    // }
    for(let i =left;i<=right;i++){
        let x = Math.floor(i/n)
        let y = i%n
        answer.push(Math.max(x,y)+1)
    }
    return answer;
}