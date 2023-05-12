function solution(n, arr1, arr2) {
    arr1= hash(arr1,n)
    arr2= hash(arr2,n)
    let map = []
    for(let i = 0;i<arr1.length;i++){
        let row = ""
        for(let j = 0;j<n;j++){
            if(arr1[i][j]==="1" || arr2[i][j]==="1"){
                row+="#"
            } else {
                row+=" "
            }
        }
        map.push(row)
    }
    return map;
}

function hash(arr,n){
    arr=arr.map(v=>{
        let item = v.toString(2)
        let len = item.length
        if(len!==n){
            item = "0".repeat(n-len)+item
        }
        return item
    })
    return arr
}