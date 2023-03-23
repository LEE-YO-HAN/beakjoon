function solution(weights) {
    let answer = 0;
    let map = new Map()
    let newSet = [1,3/2,2,4/3]
    let newArr = weights.sort((a,b)=>b-a)
    
    for(const weight of newArr){
        for(const item of newSet){
            if(map.has(weight*item)){
                answer+= map.get(weight*item)
            }
        }   
        map.set(weight,(map.get(weight)||0)+1)
    }
    return answer;
}