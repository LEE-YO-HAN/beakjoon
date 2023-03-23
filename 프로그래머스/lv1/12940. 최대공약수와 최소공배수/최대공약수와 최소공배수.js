function solution(n, m) {
    let N = n<=m?n:m
    let M = N===n?m:n
    let min = findMin(N,M)
    let max = findMax(N,M)
    return [min,max];
}

function findMin(n,m){
    let result = 0 
    for(let i = n;i>0;i--){
        if(n%i===0 && m%i===0){
            result = i
            break
        }
    }
    return result
}

function findMax(n,m){
    let result = 0
    let powerM = 1
    for(let i = 1;i<=m;i++){
        if(n*i===m*powerM){
            result = n*i
            break
        } else if(n*i>m*powerM){
            powerM++
        }
    }
    return result
}
