function solution(brown, yellow) {
    let rc = brown+yellow
    let sqrt = Math.floor(Math.sqrt(rc))
    let row = 1
    let col = sqrt
    let carpet = []
    let count = 0;
    while(true){
        if(row*col===rc){
            carpet = new Array(col).fill(0).map((v,i)=>{
                return new Array(row).fill(0).map((value,index)=>{
                    if(i!==0 && i!==col-1 && index!==0&& index!==row-1){
                        count++
                        return 1
                    } else {
                        return 0
                    }
                })
            })
            if(count===yellow){
                break
            } else {
                count = 0  
                row = 1
                col--
            }
        } else if(row*col<rc){
            row++    
        } else if(row*col>rc){
            row = 1
            col--
        }
    }
    return [row,col];
}

