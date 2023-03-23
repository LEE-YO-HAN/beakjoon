function solution(storey) {
    let answer = 0;
    let newStorey = ("0"+storey.toString()).split("").map(Number).reverse()
    
    newStorey.forEach((item,index)=>{
        if(item>5) {
            answer += 10 - item
            newStorey[index+1]++
        } else if(item<5) {
            answer += item
        } else {
            if(4<newStorey[index+1]) {
                newStorey[index+1]++
            }
            answer += item
        }
    })
    return answer;
}