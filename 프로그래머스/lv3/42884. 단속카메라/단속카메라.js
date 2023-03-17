function solution(routes) {
    let answer = 0;
    let newRoutes = routes.sort((a,b)=>a[1]-b[1]) // 진출 지점 기준 오름차순
    let cam = -30001 // 카메라 위치 탐색
    for(const route of newRoutes){
        if(cam<route[0]){ 
            answer++
            cam = route[1]
        }
    }
    return answer;
}