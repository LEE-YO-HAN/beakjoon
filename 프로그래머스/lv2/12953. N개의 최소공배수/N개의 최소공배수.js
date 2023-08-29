function solution(arr) {
    arr.sort((a,b)=>b-a);
    
    let minP = arr[0];
    let ans = 0;
    
    let idx=1
    
    let powCheck = false;
    while(!powCheck){
        minP = arr[0]*idx
        for(let i=0;i<arr.length;i++){
            if(minP%arr[i]===0){
                powCheck = true;
            } else {
                powCheck = false;
                idx++
                break;
            }
        }
    }
    
    return minP;
}