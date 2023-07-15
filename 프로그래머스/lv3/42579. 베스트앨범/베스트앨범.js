function solution(genres, plays) {
    let sum = {}
    
    genres.forEach((v,i)=>{
        if(sum[v]===undefined) {
            sum[v] = plays[i]
        } else {
            sum[v] += plays[i]
        }
    })
    
    const sumKeys = Object.keys(sum)
    const sumValues = Object.values(sum)
    
    const sumArr = sumKeys.map((v,i)=>{
        return [v,sumValues[i]]
    }).sort((a,b)=>b[1]-a[1])
    
    let albums = {}
    
    sumArr.forEach(v=>{
        albums[v[0]] = []
    })
    
    let albumArr = genres.map((v,i)=>{
        return [v,i,plays[i]]
    })
    
    albumArr.sort((a,b)=>b[2]-a[2])
    
    sumArr.forEach((v,i)=>{
        const value = v[0]
        let genreFilter = albumArr.filter(item=>item[0]===value)
        genreFilter.sort((a,b)=>{
            if(a[2]===b[2]){
                return a[1]-b[1]
            }
            return 
        })
        
        genreFilter.forEach(item=>{
           albums[value].push(item[1]) 
        })
       
    })
    
    let result = []
    Object.values(albums).forEach(item=>{
        item.forEach((v,i)=>{
            if(i<2){
                result.push(v)
            }
        })
    })
    return result;
}
